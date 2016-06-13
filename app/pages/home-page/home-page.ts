/**
 * This page utlizes the data service we have created in order to display the remote data
 */

import {Component} from '@angular/core';
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
  data: tPostData;

  constructor(
    //@Inject the service into the page
    private _post: PostDataService
    ) {
  }

  ngOnInit(){
    this._post.getPosts(/*@Optionally define body parameter and or id parameter*/'2')
      .subscribe(
        response => this.onGetPostsOk(response),  //@when replicating change name here
        error => this.onGetPostsError(error)      //@when repicating change name here
      );
  }

  onGetPostsOk(response){   //@change name to match above
    this.data=response;
  }
  onGetPostsError(error){   //@change name to match above
    console.log(error);
  }

}