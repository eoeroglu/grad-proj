import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
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
  ];

  selectedData: { id: number; value: string };

  ortalamaVol: string = "";
  sapmaVol: string = "";
  minimumVol: string = "";
  maximumVol: string = "";
  medianVol: string = "";
  ortalamaVal: string = "";
  sapmaVal: string = "";
  minimumVal: string = "";
  maximumVal: string = "";
  medianVal: string = "";

  constructor(private http: HttpClient) { }

  changed(selectedID: number, selectedPer: number) {
    this.http.get("http://127.0.0.1:5000/api/sec/" + selectedID , { responseType: 'json' }).subscribe((res: any) => {
      this.ortalamaVol = "Ortalama : " + res.ortalamaVol;
      this.sapmaVol = "Standart Sapma : " + res.sapmaVol;
      this.minimumVol = "Minimum : " + res.minVol;
      this.maximumVol = "Maximum : " + res.maxVol;
      this.medianVol = "Median : " + res.medVol;
      this.ortalamaVal = "Ortalama : " + res.ortalamaVal;
      this.sapmaVal = "Standart Sapma : " + res.sapmaVal;
      this.minimumVal = "Minimum : " + res.minVal;
      this.maximumVal = "Maximum : " + res.maxVal;
      this.medianVal = "Median : " + res.medVal;
    });
  }
}
