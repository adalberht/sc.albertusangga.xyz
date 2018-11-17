import React, { useState, useEffect } from "react";
import "./App.css";
import CongklakBoard from "./components/CongklakBoard";

export default function App(props) {
  const [userName, setUserName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [delay, setDelay] = useState(250);

  useEffect(() => {
    document.title = "Congklak.AI";
  });

  function handleClickStartButton() {
    setIsGameStarted(!isGameStarted);
  }

  function handleSetDelay(e) {
    setDelay(e.target.value);
  }

  return (
    <div className="App">
      <h1>Congklak.AI</h1>
      {!isGameStarted && (
        <div>
          <div>Choose Speed</div>
          <input
            type="range"
            min="1"
            max="1000"
            value={delay}
            onChange={handleSetDelay}
          />
        </div>
      )}
      <CongklakBoard disabled={isGameStarted} delay={delay} />
      <div>
        <button className="start-button" onClick={handleClickStartButton}>
          {isGameStarted ? "Change Speed" : "Start/Resume"}
        </button>
      </div>

      <div class="how-to">
        <div class="ht-clicker" tabindex="1">
          <h1>Cara Bermain</h1>
        </div>
        <div class="ht-hiddendiv">
          <ol>
            <li>
              Pemain memilih satu lubang pada sisi milik pemain, yaitu sisi
              bawah. Tidak ada batasan waktu untuk ​pemain ​pada setiap ​giliran
              ​untuk memilih lubang.
            </li>
            <li>
              Secara otomatis biji pada lubang tersebut akan dimasukkan
              satu-persatu ke setiap lubang kecil dan lubang besar di sisi kanan
              papan dengan pergerakan berlawanan arah jarum jam.
            </li>
            <li>
              Jika biji terakhir jatuh pada lubang di sisi milik pemain (sisi
              bawah) dan lubang tersebut tidak kosong, maka secara otomatis
              semua biji yang ada di lubang tersebut diambil dan selanjutnya
              permainan akan mengulangi langkah (2).
            </li>
            <li>
              Jika biji terakhir jatuh pada lubang di sisi pemain (sisi bawah)
              dan lubang tersebut kosong, maka secara otomatis semua biji yang
              ada pada lubang di seberangnya (sisi lawan) akan dimasukkan ke
              lubang besar milik pemain (sisi kanan). Kemudian giliran pemain
              telah selesai dan selanjutnya adalah giliran dari bot.
            </li>
            <li>
              Jika biji terakhir masuk pada lubang besar milik pemain (sisi
              kanan), maka pemain dapat melanjutkan permainan dengan mengulangi
              langkah (1).
            </li>
            <li>
              Jika biji terakhir masuk pada sisi milik lawan (sisi atas), maka
              giliran pemain telah selesai dan selanjutnya adalah giliran dari
              bot.
            </li>
            <li>
              Pemenang permainan adalah yang memiliki biji paling banyak pada
              lubang besar miliknya.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
