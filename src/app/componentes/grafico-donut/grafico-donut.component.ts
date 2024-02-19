import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafico-donut',
  standalone: true,
  imports: [],
  templateUrl: './grafico-donut.component.html',
  styleUrl: './grafico-donut.component.css'
})
export class GraficoDonutComponent implements OnInit {
  ngOnInit() {
    Chart.register(...registerables);

    const canvas = document.getElementById('grafico-donut') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const usado = 30;
    const disponivel = 100 - usado; 

    const donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['70% disponível', '30% usado'],
        datasets: [{
          data: [disponivel, usado],
          backgroundColor: [ '#5DA55C', '#104255'],
        }],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
            },
          },
          datalabels: {
            formatter: (value: string, context: { chart: { data: { labels: { [x: string]: string; }; }; }; dataIndex: string | number; }) => {
              if (context.chart && context.chart.data && context.chart.data.labels) {
                return context.chart.data.labels[context.dataIndex] + ': ' + value + '%';
              }
              return '';
            },
            color: '#000000', 
            anchor: 'center',
            align: 'center',
            font: {
              size: 12,
              weight: 'bold',
            },
          } as any, 
        },
        cutout: '60%', 
      },
    });
  }
}
