import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, PieChart } from 'echarts/charts'; // Added PieChart
import { GridComponent, LegendComponent } from 'echarts/components'; // Added LegendComponent
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, PieChart, GridComponent, LegendComponent, CanvasRenderer]);

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxEchartsDirective
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [provideEchartsCore({ echarts })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  selectedDimension = "Condição Bucal";
  selectedDemographic = "Raça";

  dimensionOptions = [
    "Idade",
    "Autopercepção de Saúde",
    "Suporte Social",
    "Condição Crônica",
    "Medicamentos",
    "Internações",
    "Quedas",
    "Visão",
    "Audição",
    "Limitação Física",
    "Cognição",
    "Humor",
    "ABVD",
    "AIVD",
    "Incontinência",
    "Perda de Peso",
    "Condição Bucal"
  ];
  demographicOptions = ["Idade", "Raça", "Cor"];

  dimensionChartOptions: any;
  fragilityChartOptions: any;
  demographicChartOptions: any;
  professionalsChartOptions: any;
  outcomesChartOptions: any;

  constructor(private cdr: ChangeDetectorRef) {
    this.initCharts();
  }

  ngOnInit() {
    this.cdr.markForCheck();
  }

  initCharts() {
    this.dimensionChartOptions = {
      series: [{
        type: 'pie',
        radius: '50%',
        data: [
          { value: 37, name: 'NÃO para todos os itens (37%)', itemStyle: { color: '#C96807' } },
          { value: 63, name: 'SIM de 1 a 4 itens (63%)', itemStyle: { color: '#EA00FF' } }
        ],
        label: { show: false }
      }]
    };
    this.fragilityChartOptions = {
      xAxis: {
        type: 'category',
        data: ['jan', 'fev', 'mar', 'abr', 'mai'],
        axisLabel: { fontSize: 10 }
      },
      yAxis: {
        type: 'value',
        max: 80,
        axisLabel: { fontSize: 10 }
      },
      series: [
        {
          name: 'Saudável',
          type: 'bar',
          data: [40, 30, 50, 20, 30],
          itemStyle: { color: '#050FC7' }
        },
        {
          name: 'Frágil',
          type: 'bar',
          data: [60, 50, 70, 40, 60],
          itemStyle: { color: '#FFFB09' }
        },
        {
          name: 'Não-Frágil',
          type: 'bar',
          data: [20, 10, 30, 50, 40],
          itemStyle: { color: '#51FF00' }
        }
      ]
    };
    this.demographicChartOptions = {
      series: [{
        type: 'pie',
        radius: '50%',
        data: [
          { value: 30, name: 'Negro (30%)', itemStyle: { color: '#FF0004' } },
          { value: 58, name: 'Branco (58%)', itemStyle: { color: '#00FFD9' } },
          { value: 12, name: 'Pardo (12%)', itemStyle: { color: '#AA00FF' } }
        ],
        label: { show: false }
      }]
    };
    this.professionalsChartOptions = {
      xAxis: {
        type: 'category',
        data: ['jan', 'fev', 'mar', 'abr', 'mai'],
        axisLabel: { fontSize: 10 }
      },
      yAxis: {
        type: 'value',
        max: 80,
        axisLabel: { fontSize: 10 }
      },
      series: [
        {
          name: 'Enfermeiro',
          type: 'bar',
          data: [70, 50, 80, 60, 40],
          itemStyle: { color: '#A300D9' }
        },
        {
          name: 'Médico',
          type: 'bar',
          data: [40, 60, 50, 30, 50],
          itemStyle: { color: '#8E8C23' }
        },
        {
          name: 'Assistente social',
          type: 'bar',
          data: [20, 30, 40, 50, 60],
          itemStyle: { color: '#050FC7' }
        }
      ]
    };
    this.outcomesChartOptions = {
      xAxis: {
        type: 'category',
        data: ['jan', 'fev', 'mar', 'abr', 'mai'],
        axisLabel: { fontSize: 10 }
      },
      yAxis: {
        type: 'value',
        max: 80,
        axisLabel: { fontSize: 10 }
      },
      series: [
        {
          name: 'Humor',
          type: 'bar',
          data: [60, 50, 70, 40, 30],
          itemStyle: { color: '#EA00FF' }
        },
        {
          name: 'Cognição',
          type: 'bar',
          data: [40, 30, 50, 60, 20],
          itemStyle: { color: '#51FF00' }
        },
        {
          name: 'Limitação Física',
          type: 'bar',
          data: [20, 40, 30, 50, 60],
          itemStyle: { color: '#ff832b' }
        },
        {
          name: 'Visão',
          type: 'bar',
          data: [50, 20, 40, 30, 40],
          itemStyle: { color: '#FF0004' }
        },
        {
          name: 'Audição',
          type: 'bar',
          data: [30, 60, 20, 40, 50],
          itemStyle: { color: '#AA00FF' }
        },
        {
          name: 'Quedas',
          type: 'bar',
          data: [10, 30, 50, 20, 40],
          itemStyle: { color: '#f1c21b' }
        }
      ]
    };
  }
}