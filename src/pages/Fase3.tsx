export default function Fase3() {
  return (
    <>
      <section id="fase3" className="min-h-20 p-8 pt-1">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-10 text-center"> <strong className="text-5xl text-[#4ade80]">Fase 3: la configurazione</strong> </h2>
          </div>
      </section>
      
      {/*win11*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">L'installazione di Windows 11 Home</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
            È praticamente fatta... il pc è montato... al primo avvio non è esploso... non ha fatto saltare la luce in casa... sembra tutto perfetto, e ora bisogna solo installare il sistema operativo: il mio caro e odiato Windows 11. <br>
            </br>
            L'operazione non è difficie: <br>
            </br><br>
            </br>
            - scaricare l'ISO di installazione di Windows 11<br>
            </br>
            - preparare una chiavetta USB con capacità minore di 32Gb in quanto va rigorosamente formattata in formato FAT32<br>
            </br>
            - inserire la cartella estratta scaricata da internet in precedenza nella chiavetta<br>
            </br>
            - inserire la chiavetta in una delle porte USB nel pannello posteriore della scheda madre a PC spento<br>
            </br>
            - avviare il PC entrando nel bios cliccando il tasto indicato nella schermata di avvio<br>
            </br>
            - impostare come dispositivo di avvio la chiavetta con l'ISO e riavviare<br>
            </br>
            - seguire la procedura di installazione fino all'avvio di windows home
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/win11.jpg"
              alt="win11"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

            {/*driver e GCC*/}
      <section className="p-8">
        <div className="max-w-7xl mt-15 mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">I driver</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-8">
            Come prima cosa non appena avviato windows è essenziale installare tutti i driver necessari, sono semplicemente dei software che permettono all'hardware di comunicare con il sistema operativo, e sono essenziali al funzionamento corretto della macchina. <br>
            </br>
            Avendo una scheda madre gigabyte ho dovuto visitare il sito di quest'ultima, nella sezione supporto della mia scheda madre specifica: la B650 Aorus Elite Ax V2.<br>
            </br>
            Una volta in questa pagina ho proceduto scaricando i driver che mi servivano:<br>
            </br><br>
            </br>
            - chipset<br>
            </br>
            - wifi<br>
            </br>
            - bluetooth<br>
            </br>
            - audio<br>
            </br>
            - lan<br>
            </br>
          </div>
          <div className="mb-10 flex justify-center">
          <img
                  src="/driver.jpg"
                  alt="driver"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
          <div className="flex justify-center mb-10">
          <img
                  src="/cartella.jpg"
                  alt="cartella"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
        </div>
      </section>

           {/*driver e GCC*/}
      <section className="p-8">
        <div className="max-w-7xl mt-15 mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Il driver grafico</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-8">
            L'ultimo driver che dovevo scaricare era quello per la scheda video, ma AMD ha un applicativo proprio: AMD adrenaline.<br>
            </br>
            Quest'unico software mi permette di controllare tutto ciò che riguarda la scheda video e il processore, una meraviglia insomma, contiene impostazioni avanzate del monitor e offre molti servizi come il controllo in tempo reale di consumi, prestazioni e temperature e molto altro.
          </div>
          <div className="mb-10 flex justify-center">
          <img
                  src="/adrena.jpg"
                  alt="adrenaline"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
          <div className="flex justify-center mb-10">
          <img
                  src="/adrenal.jpg"
                  alt="adrenaline"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
        </div>
      </section>

              {/*driver e GCC*/}
      <section className="p-8">
        <div className="max-w-7xl  mt-15 mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">GCC: Gigabyte Control Centre</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-8">
            Successivamente ho installato un programma di cui sono venuto a conoscenza solo quando windows mi ha proposto di installarlo: Gigabyte Control Centre. <br>
            </br>
            È un software stranamente completo e utile di proprietà gigabyte, mi permette tutt'ora di controllare le proprietà come frequenze, overclock o undervolt, dei diversi componenti e anche le luci RGB delle ventole, delle RAM e della scheda video, contiene inoltre una sezione dedicata agli aggiornamenti dei driver e del bios, davvero utile.
          </div>
          <div className="mb-10 flex justify-center">
          <img
                  src="/gcc.jpg"
                  alt="gcc"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400"
          />
          </div>
          <div className=" flex justify-center mb-10">
          <img
                  src="/gcc2.jpg"
                  alt="gcc2"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
        </div>
      </section>


                 {/*expo*/}
      <section className="p-8">
        <div className="max-w-7xl  mt-15 mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Profilo EXPO delle RAM</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-8">
            A questo punto ho ottenuto windows 11 pulito, stabile con tutti i driver necessari. <br>
            </br>
            Era giunto il momento di un riavvio in modo da usare al massimo due componenti: le RAM. Queste infatti sono delle Lexar Ares a 6000 MT/s, ma il mio caro windows di base le aveva impostate a 5200 MT/s, in pratica stava rubando prestazioni che avevo pagato, di conseguenza si procede con l'attivazione del profilo EXPO, una tecnologia che permette di portare al massimo della loro frequenza le RAM, da BIOS.
          </div>
          <div className="flex justify-center mb-10">
          <img
                  src="/expo.jpg"
                  alt="expo"
                  className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
          />
          </div>
        </div>
      </section>

            {/*app config*/}
      <section className="p-8">
        <div className="max-w-7xl mt-15  mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <div className="text-white-30 p-10 leading-relaxed mb-8">
            Ciò che mancava ad un utilizzo normale di windows era solo installare una serie di applicativi che tutt'ora installo, parlo di software di configurazione più profonda di windows, contenenti impostazioni che di base non sono in windows 11. <br>
            </br>
            Permettono di attuare un debloat approfondito, cioè l'eliminazione di quei software che di base vengono installati con windows e che sono prettamente utili solo ad appesantire il sistema, mi aiutano a personalizzare maggiormente windows in termini di sicurezza, stabilità, pesantezza e prestazioni.<br>
            </br>
            Sono solito installarne 6:<br>
            </br>
            <br>
            </br>
            - Wintoys e Winhance sono analoghi, entrambi contengono impostazioni avanzate per windows<br>
            </br>
            - Windhawk mi permette di personalizzare profondamente windows a livello grafico<br>
            </br>
            - Revo Unistaller mi permette di disintallare completamente i programmi, infatti di solito rimangono file nella cache e chiavi di registro residue<br>
            </br>
            - Everythings rimedia ad una mancanza di windows cioè la ricerca istantanea di file e programmi, infatti di base la ricerca di windows è indicizzata e estremamente lenta<br>
            </br>
            - Windirstat è un applicativo che apprezzo molto in quanto rappresenta graficamente lo spazio occupato nel disco
          </div>
        </div>
      </section>

    </>
  );
}