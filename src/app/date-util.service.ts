import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() {
  }

  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = ['Bạn đã sống khoảng: '];
    const now = new Date();
    console.log(diff);
    diff = new Date(diff);

    if (!(now > diff)) {
      return 'Bạn không thể sinh ra sau hôm nay được !!! 😀';
    }
    // @ts-ignore
    const diffTime = Math.abs(now - diff);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    /*console.log(diffTime);
    console.log(diffDays);*/

    console.log(now);

    console.log((diffDays / 356));

    if (diffDays >= 365) {
      // @ts-ignore
      const years = (diffDays / 365).toFixed(0) - 1;
      result.push(years + ' năm');
      // @ts-ignore
      const days = diffDays - (365 * years);
      result.push(days + ' days');
    }
    return result.join(' ');

    /*const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');*/
  }
}
