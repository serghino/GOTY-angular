import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent implements OnDestroy {

  results: any[] = 
  [
    {
      name: 'game 1',
      value: 20
    },
    {
      name: 'game 2',
      value: 40
    },
    {
      name: 'game 3',
      value: 5
    },
    {
      name: 'game 4',
      value: 60
    }
  ];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'vots';

  colorScheme = 'nightLights';

  interval;

  constructor() {
    this.interval = setInterval(() => {
      console.log(`interval`);
      const newResults = [...this.results];
      // tslint:disable-next-line: forin
      for (const key in newResults) {
          newResults[key].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
