import { Injectable } from '@angular/core';
import { CollectionService } from 'ngx-edu-sharing-api';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EduSharingService {
    static readonly repository = '-home-';

    constructor(private collectionService: CollectionService) {}

    getSubcollections(collection: string, params: { repository?: string, scope?: any, maxItems?: number, skipCount?: number } = {}): Observable<any> {
        const queryParams = {
            repository: EduSharingService.repository,
            collection,
            ...params,
        };
        
        return this.collectionService.getSubcollections({
          repository: queryParams.repository, 
          collection: queryParams.collection, 
          scope: queryParams.scope, 
          maxItems: queryParams.maxItems, 
          skipCount: queryParams.skipCount,
    });
    }
    getReferences(
        collection: string,
        params: {
          repository?: string;
          scope?: any;
          maxItems?: number;
          skipCount?: number;
        } = {}
      ): Observable<any> {
        const queryParams = {
          repository: EduSharingService.repository,
          collection,
          ...params,
        };
    
        return this.collectionService.getReferences({
          repository: queryParams.repository,
          collection: queryParams.collection,
          //scope: queryParams.scope,
          maxItems: queryParams.maxItems,
          skipCount: queryParams.skipCount,
        });
      }
    }