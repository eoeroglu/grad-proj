import { Component, OnInit } from "@angular/core";
import { DatepickerOptions } from "ng2-datepicker";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.scss"],
})
export class ForecastComponent implements OnInit {
  selectedData: { id: number; value: string };
  method: number;
  startDate1: any = 1591998682995;
  endDate1: any = 1591998682995;

  startDate2: any = 1591998682995;
  endDate2: any = 1591998682995;

  selectBoxDatas: { id: number; value: string }[] = [
    { id: 1, value: "MARGARINLER" },
    { id: 2, value: "DONDURMALAR" },
    { id: 3, value: "BULASIK DETERJANLARI" },
    { id: 4, value: "GRANUL ICECEKLER" },
    { id: 5, value: "NONWEB" },
    { id: 6, value: "MAYONEZLER" },
    { id: 7, value: "HELVALAR" },
    { id: 8, value: "HEDIYELIK CIKOLATALAR" },
    { id: 9, value: "KULAK TEMIZLEME CUBUGU" },
    { id: 10, value: "YARABANTLARI" },
    { id: 11, value: "PIRINC UNLARI" },
    { id: 12, value: "AGIZ SAGLIGI" },
    { id: 13, value: "EV TEMIZLIGI MADDELERI" },
    { id: 14, value: "TURK KAHVELERI" },
    { id: 15, value: "KAGIT URUNLERI" },
    { id: 16, value: "BEYAZ ETLER" },
    { id: 17, value: "CEREZLER" },
    { id: 18, value: "YOGURTLAR" },
    { id: 19, value: "AYRAN VE KREMA" },
    { id: 20, value: "ET VE TAVUK SULARI" },
    { id: 21, value: "AMPULLER" },
    { id: 22, value: "CILT BAKIM URUNLERI" },
    { id: 23, value: "TEREYAGLAR" },
    { id: 24, value: "HARDALLAR" },
    { id: 25, value: "AILE PLANLAMASI" },
    { id: 26, value: "KEDI-KOPEK MAMALARI" },
    { id: 27, value: "MAYALAR" },
    { id: 28, value: "HAZIR CORBALAR" },
    { id: 29, value: "MAKARNALAR" },
    { id: 30, value: "MADEN SULARI" },
    { id: 31, value: "KURUYEMISLER" },
    { id: 32, value: "UNLAR" },
    { id: 33, value: "PUDINGLER" },
    { id: 34, value: "EV TEMIZLIGI ARACLARI" },
    { id: 35, value: "HAZIR KAHVELER VE KREMALAR" },
    { id: 36, value: "TURSULAR" },
    { id: 37, value: "BEBEK ISLAK MENDILLERI" },
    { id: 38, value: "SIVI YAGLAR" },
    { id: 39, value: "COCUK BEZLERI" },
    { id: 40, value: "BUZLU CAYLAR" },
    { id: 41, value: "KAKAOLU SUT TOZLARI" },
    { id: 42, value: "KETCAPLAR" },
    { id: 43, value: "SAC BOYALARI" },
    { id: 44, value: "KADIN PARFUMLERI" },
    { id: 45, value: "AGIZ GARGARALARI" },
    { id: 46, value: "HALI SAMPUANLARI" },
    { id: 47, value: "Test Sector 1" },
    { id: 48, value: "EV YAPIMI URUNLER" },
    { id: 49, value: "TUZ" },
    { id: 50, value: "ET MAMULLERI" },
    { id: 51, value: "PASTANE URUNLERI" },
    { id: 52, value: "HIJYENIK PEDLER" },
    { id: 53, value: "ALUMINYUM FOLYOLAR VE STREC FILMLER" },
    { id: 54, value: "SOSLAR" },
    { id: 55, value: "TRAS BICAKLARI" },
    { id: 56, value: "EV PARFUMLERI" },
    { id: 57, value: "SAGLIK BEZLERI" },
    { id: 58, value: "MALT ICECEKLER" },
    { id: 59, value: "BEBEK BANYO KOPUKLERI" },
    { id: 60, value: "GUNES YAGLARI VE KREMLERI" },
    { id: 61, value: "TRAS ALETLERI" },
    { id: 62, value: "SULAR" },
    { id: 63, value: "BAKLIYAT" },
    { id: 64, value: "CAYLAR" },
    { id: 65, value: "PEYNIRLER" },
    { id: 66, value: "BISKUVILER" },
    { id: 67, value: "RECELLER" },
    { id: 68, value: "KREM CIKOLATALAR" },
    { id: 69, value: "YUMURTALAR" },
    { id: 70, value: "PILLER" },
    { id: 71, value: "SAKIZLAR" },
    { id: 72, value: "CAMASIR DETERJANLARI" },
    { id: 73, value: "BEBEK MAMALARI" },
    { id: 74, value: "TUY DOKUCU KREMLER" },
    { id: 75, value: "DIS FIRCALARI" },
    { id: 76, value: "MISIR GEVREKLERI" },
    { id: 77, value: "ZEYTINLER" },
    { id: 78, value: "EKMEKLER" },
    { id: 79, value: "CIKOLATALAR" },
    { id: 80, value: "MEYVE SULARI" },
    { id: 81, value: "SEKERLER" },
    { id: 82, value: "SALEPLER VE BOZALAR" },
    { id: 83, value: "SABUNLAR VE DUS JELLERI" },
    { id: 84, value: "CAMASIR YUMUSATICILARI" },
    { id: 85, value: "SAC KREMLERI" },
    { id: 86, value: "TRAS LOSYONLARI" },
    { id: 87, value: "TRAS KREM VE KOPUKLERI" },
    { id: 88, value: "HAZIR PASTA UNLARI" },
    { id: 89, value: "ENERJI VE SPOR ICECEKLERI" },
    { id: 90, value: "TOZ SABUNLAR" },
    { id: 91, value: "DIGER ACIK GIDA URUNLERI" },
    { id: 92, value: "TOZ-KESME SEKERLER" },
    { id: 93, value: "BAHARATLAR" },
    { id: 94, value: "SIRKELER" },
    { id: 95, value: "COP TORBALARI" },
    { id: 96, value: "SAMPUANLAR" },
    { id: 97, value: "BIRALAR" },
    { id: 98, value: "DEODORANTLAR" },
    { id: 99, value: "BEBEK PUDRALARI" },
    { id: 100, value: "KUMAS KOKU GIDERICILER" },
    { id: 101, value: "SAC SPREYLERI" },
    { id: 102, value: "SAC JOLELERI" },
    { id: 103, value: "GAZLI MESRUBATLAR" },
    { id: 104, value: "CIKOLATA KAPLAMALAR" },
    { id: 105, value: "SUTLER" },
    { id: 106, value: "RENKLI KOZMETIKLER" },
    { id: 107, value: "HAZIR YEMEKLER" },
    { id: 108, value: "BANDED PACK" },
    { id: 109, value: "LIMON-SALGAM SULARI" },
    { id: 110, value: "DONDURULMUS GIDALAR" },
    { id: 111, value: "TAHIN - PEKMEZ" },
    { id: 112, value: "SALCALAR" },
    { id: 113, value: "DIS MACUNLARI" },
    { id: 114, value: "BALIK KONSERVELERI" },
    { id: 115, value: "ALKOLLU ICECEKLER" },
    { id: 116, value: "ARAP SABUNLARI" },
    { id: 117, value: "MOBILYA BAKIM URUNLERI" },
    { id: 118, value: "KOLONYALAR" },
    { id: 119, value: "SINEK-BOCEK ILACLARI" },
    { id: 120, value: "KOPUK JOLELER" },
    { id: 121, value: "BRIYANTINLER" },
    { id: 122, value: "EL TEMIZLEME JELLERI VE KOPUKLERI" },
    { id: 123, value: "TAHILLI ICECEKLER" },
  ];

  chartData = [
    {
      date: "01.01.2014",
      val: 12611626,
    },
    {
      date: "01.02.2014",
      val: 14032074,
    },
    {
      date: "01.03.2014",
      val: 13842428,
    },
    {
      date: "01.04.2014",
      val: 13907346,
    },
    {
      date: "01.05.2014",
      val: 13402214,
    },
    {
      date: "01.06.2014",
      val: 16091141,
    },
    {
      date: "01.07.2014",
      val: 15799102,
    },
    {
      date: "01.08.2014",
      val: 15008854,
    },
    {
      date: "01.09.2014",
      val: 15928293,
    },
    {
      date: "01.10.2014",
      val: 16190791,
    },
    {
      date: "01.11.2014",
      val: 16355483,
    },
    {
      date: "01.12.2014",
      val: 15695230,
    },
    {
      date: "01.01.2015",
      val: 15519185,
    },
    {
      date: "01.02.2015",
      val: 14675839,
    },
    {
      date: "01.03.2015",
      val: 13849386,
    },
    {
      date: "01.04.2015",
      val: 14976432,
    },
    {
      date: "01.05.2015",
      val: 14620919,
    },
    {
      date: "01.06.2015",
      val: 14871257,
    },
    {
      date: "01.07.2015",
      val: 14780064,
    },
    {
      date: "01.08.2015",
      val: 14382398,
    },
    {
      date: "01.09.2015",
      val: 15269799,
    },
    {
      date: "01.10.2015",
      val: 15693357,
    },
    {
      date: "01.11.2015",
      val: 15555142,
    },
    {
      date: "01.12.2015",
      val: 14942255,
    },
    {
      date: "01.01.2016",
      val: 13854085,
    },
    {
      date: "01.02.2016",
      val: 14561477,
    },
    {
      date: "01.03.2016",
      val: 13681143,
    },
    {
      date: "01.04.2016",
      val: 14327168,
    },
    {
      date: "01.05.2016",
      val: 14294879,
    },
    {
      date: "01.06.2016",
      val: 14191835,
    },
    {
      date: "01.07.2016",
      val: 14693328,
    },
    {
      date: "01.08.2016",
      val: 14453247,
    },
    {
      date: "01.09.2016",
      val: 15772144,
    },
    {
      date: "01.10.2016",
      val: 16883852,
    },
    {
      date: "01.11.2016",
      val: 18343574,
    },
    {
      date: "01.12.2016",
      val: 16885740,
    },
    {
      date: "01.01.2017",
      val: 16643874,
    },
    {
      date: "01.02.2017",
      val: 15594915,
    },
    {
      date: "01.03.2017",
      val: 15503044,
    },
    {
      date: "01.04.2017",
      val: 16389196,
    },
    {
      date: "01.05.2017",
      val: 17595611,
    },
    {
      date: "01.06.2017",
      val: 17668142,
    },
    {
      date: "01.07.2017",
      val: 19485251,
    },
    {
      date: "01.08.2017",
      val: 20606743,
    },
    {
      date: "01.09.2017",
      val: 22042170,
    },
    {
      date: "01.10.2017",
      val: 24225482,
    },
    {
      date: "01.11.2017",
      val: 23573807,
    },
    {
      date: "01.12.2017",
      val: 23386103,
    },
    {
      date: "01.01.2018",
      val: 22243290,
    },
    {
      date: "01.02.2018",
      val: 20657715,
    },
    {
      date: "01.03.2018",
      val: 19564590,
    },
    {
      date: "01.04.2018",
      val: 18459807,
    },
    {
      date: "01.05.2018",
      val: 18875649,
    },
    {
      date: "01.06.2018",
      val: 19156618,
    },
    {
      date: "01.07.2018",
      val: 20774436,
    },
    {
      date: "01.08.2018",
      val: 21181451,
    },
    {
      date: "01.09.2018",
      val: 18450172,
    },
    {
      date: "01.10.2018",
      val: 18831666,
    },
    {
      date: "01.11.2018",
      val: 18511317,
    },
    {
      date: "01.12.2018",
      val: 18497882,
    },
    {
      date: "01.01.2019",
      val: 18925038,
    },
    {
      date: "01.02.2019",
      val: 19493659,
    },
    {
      date: "01.03.2019",
      val: 17390584,
    },
    {
      date: "01.04.2019",
      val: 19979849,
    },
    {
      date: "01.05.2019",
      val: 18296128,
    },
    {
      date: "01.06.2019",
      val: 19276058,
    },
    {
      date: "01.07.2019",
      val: 20387634,
    },
    {
      date: "01.08.2019",
      val: 21673656,
    },
    {
      date: "01.09.2019",
      val: 21136722,
    },
    {
      date: "01.10.2019",
      val: 22615019,
    },
    {
      date: "01.11.2019",
      val: 21941854,
    },
    {
      date: "01.12.2019",
      val: 21382559,
    },
  ];

  type = "line";
  data = {
    labels: Array.from(this.chartData, (x) => {
      return x.date;
    }),
    datasets: [
      {
        label: "My First dataset",
        data: Array.from(this.chartData, (x) => {
          return x.val;
        }),
      },
    ],
  };

  options: {
    responsive: true;
    title: {
      display: true;
      text: "Chart.js Line Chart";
    };
    tooltips: {
      mode: "index";
      intersect: false;
    };
    hover: {
      mode: "nearest";
      intersect: true;
    };
    scales: {
      xAxes: [
        {
          display: true;
          scaleLabel: {
            display: true;
            labelString: "Month";
          };
        }
      ];
      yAxes: [
        {
          display: true;
          scaleLabel: {
            display: true;
            labelString: "Value";
          };
        }
      ];
    };
  };

  constructor() {}

  ngOnInit() {}
}
