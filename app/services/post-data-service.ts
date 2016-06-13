/**
 * A template data service that implements a function for get, post, etc.
 * Use this code as a template and modify according to your needs
 *
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//@Import your data definition here
import {tPostData} from './tpost-data';
import {Headers} from '@angular/http'

@Injectable()

//@Change the name of the class to match your service
export class PostDataService {

    //@Change the base URL here to match your service
    private _baseUrl='http://jsonplaceholder.typiccode.com';
    
    private _headers:Headers=new Headers();

    constructor(
         private _http: Http
    ){
        //@ Add your headers here with additional append statements
        this._headers.append('Content-Type','application/json; charset=utf-8');
    }


    //--------------------------------------------------

    //@Here define the name of your function
    getPosts(
        //body:tPostData,   //@Outbound request body. Uncomment to use and define the appropriate datatype.
        id:string         //@You may wish to define addtional objects in the restful path, e.g. /{id}
    ){     
        return this._http.get(  //@Define here if your method is Get, Post, Put, etc.
                this._baseUrl
                +'/posts'       //@Define here your restFul static path
                +id             //@Comment if you don't wish to use additional parameters
                ,{headers: this._headers}   //@Comment or uncomment based on whether you wish to use headers in your post 
            )
            .map (response => this._mapGetPosts(response) );    //@change the name of this function in the form _map<function name>
    }

    private _mapGetPosts(response){     //@adjust the function name to match above
        //@optionally process response here
        return response.json();
    }

}
