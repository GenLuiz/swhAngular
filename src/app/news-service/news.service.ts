import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from '../models/news.model';

@Injectable()
export class NewsService {
    private newsUrl = 'api/news';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getNews(): Promise<News[]> {
        return this.http.
            get(this.newsUrl)
            .toPromise()
            .then(response => response.json().data as News[])
            .catch(this.handleError)
    }

    getSingleNews(id: number): Promise<News> {
        const url = `${this.newsUrl}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json().data as News)
            .catch(this.handleError);
    }


    updateSingleNews(news: News): Promise<News> {
        const url = `${this.newsUrl}/${news.id}`;
        return this.http
            .put(url, JSON.stringify(news), { headers: this.headers })
            .toPromise()
            .then(() => news)
            .catch(this.handleError);
    }

    createSingleNews(news: News): Promise<News> {
        return this.http
            .post(this.newsUrl, JSON.stringify(news), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as News)
            .catch(this.handleError);
    }

    deleteSingleNews(id: number): Promise<void> {
        const url = `${this.newsUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}