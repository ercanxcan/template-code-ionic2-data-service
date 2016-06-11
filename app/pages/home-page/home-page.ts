/**
 * This page utlizes the data service we have created in order to display the remote data
 */

import {Component} from '@angular/core';
//import OnInit if you wish the data display when the page comes up.
import {OnInit} from '@angular/core';
//@import the data service
import {PostDataService} from '../../services/post-data-service';
//@import the data type of the remote data, for stricter data typing.
import {tPostData} from '../../services/tpost-data';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  //@define the data service as provider
  providers: [PostDataService]
})

export class HomePage implements OnInit {

  //@Declare a placeholder for the data. Strictly type it.
  data:tPostData;

  constructor(
    //@Inject the service into the page
    private _post: PostDataService
    ) {
  }

  //@Include a handler for manual refreshing of the data in the page (optional). Eg. a refresh button.
  onRefreshButtonClick(){
    //we have defined a single private function to handles data refreshing.
    this.refreshData();
  }

  //@Implement ngOnInit if you wish to display data when the page is displayed.
  ngOnInit(){
    this.refreshData();
  }

  //this methods subscribes to the results of the data service when they returned.
  private refreshData(){
    this._post.getData()
      .subscribe(
          response=>this.onResponse(response),
          error=>this.onError(error)
      );
  }

  //@Implement here any further data manipulation or action on a good response here.
  private onResponse(response){
    this.data=response;
  }

  //@Implement any error handling for data fetching errors here.
  private onError(error){
    console.log(error);
  }

}
