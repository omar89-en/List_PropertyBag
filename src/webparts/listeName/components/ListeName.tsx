import * as React from "react";
import styles from "./ListeName.module.scss";
import { IListeNameProps } from "./IListeNameProps";
import { escape } from "@microsoft/sp-lodash-subset";
import {
  SPHttpClient,
  SPHttpClientConfiguration,
  SPHttpClientResponse,
  ODataVersion,
  ISPHttpClientConfiguration,
} from "@microsoft/sp-http";

export interface IReactHierarchyState {
  data: any;
}
export default class ListeName extends React.Component<
  IListeNameProps,
  IReactHierarchyState
> {
  constructor(props: IListeNameProps) {
    super(props);
    this.state = {
      data: [],
    };

    this.getList();
    //this.componentDidMount()
  }
  public render(): React.ReactElement<IListeNameProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;
    const Listname = this.state.data;
    let url = `${this.props.currentWebUrl}/${this.props.description}?guid=`;
    let url1 = `${this.props.currentWebUrl}/${this.props.description}`;
    return (
      <div>
        <div className={styles.list}>
          <ul className={styles.list1}>
            
            <li>
            
              <a onClick={() => window.open(url1)} target="_blank">
                Web all Properties
              </a>
            </li>
          </ul>

          {Listname.map((val: any) => {
            return (
              <ul className={styles.list1}>
                <li>
                  <a onClick={() => window.open(url + val.guid)} target="_blank">
                    {val.key}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }

  public async getList() {
    var data = [];
    this.props.spHttpClient
      .get(
        `${this.props.currentWebUrl}/_api/web/lists?$select=Title,Id&$filter=Hidden eq false&$orderby=Title`,
        SPHttpClient.configurations.v1
      )
      .then(async (response: SPHttpClientResponse) => {
        response.json().then((PropertyValues: any) => {
          PropertyValues.value.forEach((element) => {
            data.push({
              key: element.Title,
              text: element.Title,
              guid: element.Id,
            });
          });

          this.setState({
            data: data,
          });
        });
      });
  }
}
