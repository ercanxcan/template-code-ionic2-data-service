/**
 * The data service that fetch the data
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

//@Change the name of the class
export class PostDataService {

    constructor(
         private _http: Http
    ){}

    getData(){
        //@change the URL 
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .map (response => this.mapMyData(response) );
    }

    //in this method we can do further processing to our fetched data
    private mapMyData(response){
        //in the end we have to return our prcessed data
        //by default turn the response from JSON to javascript object and return it
        return response.json();
    }
}
