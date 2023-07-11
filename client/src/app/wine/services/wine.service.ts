import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IWineNoteCategory } from '../interfaces/wine-note-category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IWineNote } from '../interfaces/wine-note';
import { IWine } from '../interfaces/wine.interface';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  baseURL: string = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.baseURL = environment.apiURL;
    }
  }

  getWines(): Observable<IWine[]> {
    let url = this.baseURL + '/api/wines/'
    console.log(`Getting ${url}`);
    return this.http.get<IWine[]>(url).pipe(catchError(this.handleError<IWine[]>('getWines')))
  }

  getWineById(id: string): Observable<IWine> {
    console.log(`Getting wine ${id}`)
    let url = this.baseURL + `/api/wines/${id}`
    return this.http.get<IWine>(url).pipe(catchError(this.handleError<IWine>('getWineById')))
  }

  getNoteCategories(): Observable<IWineNoteCategory[]> {
    return this.http.get<IWineNoteCategory[]>(this.baseURL + '/api/wine_notes/categories')
    .pipe(catchError(this.handleError<IWineNoteCategory[]>('getNoteCategories')))
  }

  getNoteCategory(category: string): Observable<IWineNoteCategory> {
    return this.http.get<IWineNoteCategory>(this.baseURL + '/api/wine_notes/categories/?category=' + category)
    .pipe(catchError(this.handleError<IWineNoteCategory>('getNoteCategory')))
  }
  getNoteCategoryById(categoryId: string): Observable<IWineNoteCategory> {
    return this.http.get<IWineNoteCategory>(this.baseURL + '/api/wine_notes/categories/?_id=' + categoryId)
    .pipe(catchError(this.handleError<IWineNoteCategory>('getNoteCategory')))
  }

  saveNoteCategory(category: IWineNoteCategory): Observable<IWineNoteCategory> {
    if(category._id){
      // put
      console.log('putting category...')
      console.log(category);
      const url = this.baseURL + `/api/wine_notes/categories/${category._id}`
      console.log(url);
      return this.http
        .put<IWineNoteCategory>(url, category)
        //.pipe(this.handleError<IWineNoteCategory>('saveNoteCategory'))
    } else {
      // post
      const url = this.baseURL + '/api/wine_notes/categories/new'
      return this.http.post(url, category).pipe(this.handleError<IWineNoteCategory>('saveNoteCategory'))
    }
  }

  getNotes(category?: IWineNoteCategory): Observable<IWineNote[]> {
    let url = this.baseURL + `/api/wine_notes/`
    if(category && category._id){
      url = `${url}?category=${category._id}`
    }
    return this.http.get<IWineNote[]>(url)
      .pipe(catchError(this.handleError<IWineNote[]>('getWineNotes')))
  }

  getNoteById(id: string): Observable<IWineNote> {
    const url = this.baseURL + `/api/wine_notes/${id}`;
    return this.http.get<IWineNote>(url).pipe(catchError(this.handleError<IWineNote>('getWineNoteById')))
  }

  saveNote(note: IWineNote): Observable<IWineNote> {
    const _id = note._id ? note._id : 'new'
    const url = this.baseURL + `/api/wine_notes/${_id}`
    if(note._id){
      return this.http.put<IWineNote>(url, note)
    } else {
      return this.http.post<IWineNote>(url, note)
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status !== 401) {
        console.log(error);
      }
      return of(result as T);
    };
  }

}


const WINES = [
  {
    id: 1,
    name: 'Cabernet Franc',
    description:'A true expression of this grape in California. Smells like peppers and cooking herbs (think: tarragon or rosemary). The palate has a pleasant medium weight, with meaty, chewy fruit. This is a great American Cab Franc. Roast up some chicken, stuff it with goat cheese, and sip this peppery awesomeness.',
    year:'2017',
    type:'red',
    color: 'red',
    composition:[{
      percentage: 1,
      grape: 'Cabernet Franc'
    }],
    tastingNotes:['plum', 'herbs', 'red pepper'],
    pickedBy:['Seth'],
    imageUrl: '/assets/wine/wine-1.png'
  },
  {
    id:2,
    name: 'Côtes du Rhône',
    description:'The blend is typical of Côtes du Rhône, and its high proportion of Grenache makes the wine suitable for drinking on the younger side. This 2017 Côtes du Rhône is at once fresh and mature, with ripe dark fruit notes of blackberry and cassis punctuated by earthy minerality, roasted meat, and chocolate.',
    year:'2017',
    type:'red',
    color: 'red',
    composition:[
      {
        percentage: .72,
        grape: 'Grenache'
      },
      {
        percentage: .08,
        grape: 'Cinsault'
      },
      {
        percentage: .2,
        grape: 'Mourvèdre'
      },
  ],
    tastingNotes:['smoke', 'earth', 'blackberry', 'cassis', 'chocolate'],
    pickedBy:['Nate'],
    imageUrl: '/assets/wine/wine-2.png'
  },
  {
    id:3,
    name: 'Cabernet Sauvingon',
    description:'Aromas of red fruits are followed by concentrated dark berry tastes, especially blackberry and cassis, accented by notes of baking spices and cedar. With its fine tannins and well-integrated oak — aging was mostly in previously used French barrels — it would pair wonderfully with filet mignon, leg of lamb, and other festive dishes.',
    year:'2018',
    type:'red',
    color: 'red',
    composition:[
      {
        percentage: .8,
        grape: 'Cabernet Sauvignon'
      },
      {
        percentage: .1,
        grape: 'Cabernet Franc'
      },
      {
        percentage: .1,
        grape: 'Mourvèdre'
      },
  ],
    tastingNotes:['blackberry', 'cassis', 'baking spices', 'cedar'],
    pickedBy:['Seth', 'Cam'],
    imageUrl: '/assets/wine/wine-3.png'
  },
  {
    id:4,
    name: 'Chenin Blanc',
    description:'This is a deep and salty white wine. It has soft acidity and a slight weight on the palate. It\'s a great wine for a white meats like turkey or roasted chicken.',
    year:'2020',
    type:'white',
    color: 'white',
    tastingNotes:['grass', 'lemon', 'citrus', 'cream'],
    pickedBy:['Cam'],
    imageUrl: '/assets/wine/wine-4.png'
  },
  {
    id:5,
    name: 'Chianti Classico',
    description:'Nice, vibrant red wine. The acidity is active and the depth subtle depth anchors the core of fruit. Classic smells of cherries and cranberries are combined with a whiff of worn leather. This is a great wine to have lying around for a pasta night.',
    year:'2018',
    type:'red',
    color: 'red',
    composition:[{
      percentage: 1,
      grape: 'Sangiovese'
    }],
    tastingNotes:['cranberry', 'leather', 'cherry'],
    pickedBy:['Seth', 'Nate'],
    imageUrl: '/assets/wine/wine-5.png'
  },
  {
    id:6,
    name: 'Rosé de Pinot Noir',
    description:'Soft, supple, round, and creamy; this wine smells like peaches and cream. It has a nice, heady mouthfeel with good acidity that cuts through the pink depth.',
    year:'2021',
    type:'rose',
    color: 'rose',
    composition:[{
      percentage: 1,
      grape: 'Pinot Noir'
    }],
    tastingNotes:['cream', 'peach', 'vanilla'],
    pickedBy:['Chris', 'Cam'],
    imageUrl: '/assets/wine/wine-6.png'
  },
]