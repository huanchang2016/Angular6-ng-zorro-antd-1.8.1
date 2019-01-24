import { Pipe, PipeTransform } from '@angular/core';
import { HttpRequestService } from 'src/app/core/service/http-request.service';

@Pipe({
  name: 'permission'
})
export class PermissionPipe implements PipeTransform {

  constructor(
    private httpRequest: HttpRequestService
  ) {}

  transform(value: boolean): boolean {

    return value;
  }

}
