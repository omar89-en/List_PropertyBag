import * as React from "react";
import styles from "./Propertybag.module.scss";
import { IPropertybagProps } from "./IPropertybagProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  SPHttpClient,
  SPHttpClientConfiguration,
  SPHttpClientResponse,
  ODataVersion,
  ISPHttpClientConfiguration,
} from "@microsoft/sp-http";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export interface IReactHierarchyState {
  allProperty: any;

  data: any;
  Property: any;
}

export default class Propertybag extends React.Component<
  IPropertybagProps,
  IReactHierarchyState
> {
  constructor(props: IPropertybagProps) {
    super(props);
    this.state = {
      allProperty: [],

      data: [],
      Property: [],
    };
    if (props.guid === false) {
      this.getpro();
    } else {
      this.getList1(props.guid);
    }
  }

  public render(): React.ReactElement<IPropertybagProps> {
    const {
      description,
      guid,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;
    const data = this.state.allProperty;
    const Listname = this.state.Property;
    return (
      <div className={styles.welcome}>
        <table className={styles.table1}>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          {data.map((val: any, key: any) => {
            return (
              <tr key={key}>
                <td>{val.key}</td>
                <td>{val.value}</td>
              </tr>
            );
          })}
          {Listname.map((val: any, key: any) => {
            return (
              <tr key={key}>
                <td>{val.key}</td>
                <td>{val.value}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }

  public getpro() {
    var libraries = [];
    this.props.spHttpClient
      .get(
        `${this.props.currentWebUrl}/_api/web/allProperties?$select=*`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        response.json().then((PropertyValues: any) => {
          for (let key in PropertyValues) {
            if (
              key != "@odata.context" &&
              key != "@odata.editLink" &&
              key != "@odata.id" &&
              key != "@odata.type"
            ) {
              libraries.push({ key: key, value: PropertyValues[key] });
            }
          }

          this.setState({
            allProperty: libraries,
          });
        });
      });
  }

  public async getList1(guid: any) {
    var Property = [];
    this.props.spHttpClient
      .get(
        `${this.props.currentWebUrl}/_api/web/lists('${guid}')/RootFolder/Properties`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        response.json().then((PropertyValues: any) => {
          for (let key in PropertyValues) {
            if (
              key != "@odata.context" &&
              key != "@odata.editLink" &&
              key != "@odata.id" &&
              key != "@odata.type"
            ) {
              Property.push({ key: key, value: PropertyValues[key] });
            }
          }
          

          this.setState({
            Property: Property,
          });
        });
      });
  }
}
