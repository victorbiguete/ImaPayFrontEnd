import { Component, Input, OnInit } from '@angular/core';
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
  @Input() vl_usado: string = '0';
  @Input() vl_total: string = '0';
  @Input() vl_disponivel: string = '100';

  ngOnInit() {
    Chart.register(...registerables);
  
    const canvas = document.getElementById('grafico-donut') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  
    const usado = parseFloat(this.vl_usado.replace(',', '.'));
    const total = parseFloat(this.vl_total.replace(',', '.'));
  
    const percentualUsado = (usado / total) * 100;
    const percentualDisponivel = 100 - percentualUsado;
  
    const donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [`${percentualDisponivel.toFixed(0)}% disponível`, `${percentualUsado.toFixed(0)}% usado`],
        datasets: [{
          data: [percentualDisponivel, percentualUsado],
          backgroundColor: ['#5DA55C', '#104255'],
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