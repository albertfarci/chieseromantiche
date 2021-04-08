import { Injectable } from '@angular/core';
import { LIST_MAP_CONFIGURATION, LisMapModel, ListMapTypes } from '../models/list-map-settings.model';

@Injectable({
  providedIn: 'root'
})
export class HomeTemplateSettingsService {

  constructor() { }

  getListMapSettings(componentName: ListMapTypes): LisMapModel {
    return LIST_MAP_CONFIGURATION.get(componentName);
  }
}
