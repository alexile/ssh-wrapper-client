import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BackService {
  light:boolean = true;
}