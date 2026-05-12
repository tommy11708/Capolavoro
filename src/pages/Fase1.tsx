export default function Fase1() {

return (
        <>
                <section id="fase1" className="min-h-20 p-8 pt-1">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-5xl text-[#4ade80]">Fase 1: la ricerca dei componenti</strong> </h2>
        </div>
      </section>

      
      {/* CPU */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">La CPU</strong> </h2>
              <p className="text-white-30 p-10 leading-relaxed mb-4">
                Come primo componente da decidere ho trovato saggio che fosse la CPU, è il componente da cui dipende il resto del PC, soprattutto per la scelta della scheda madre. <br />
                Ho optato subito per AMD e non Intel in quanto oltre alla convenienza generale, gli Intel in quel periodo avevano un problema nel microcodice che li rendeva altamente instabili. <br />
                La scelta iniziale vergeva verso il Ryzen 5 7600x, un processore di fascia media e di tutto rispetto, sono poi passato al Ryzen 7 7700x, prestazioni maggiori per un prezzo non troppo maggiore, e infine, ho ringraziato il cielo per il momento estremamente favorevole in termini di prezzi e ho fatto un salto di qualità verso il Ryzen 7 7800x3d, per farmi capire: fino a pochi mesi dopo, con l'uscita del R7 9800x3d, era il MIGLIOR processore da gaming e rendering!
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/cpu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* GPU */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 ml-3">
            <div className="w-full md:w-[40%] lg:w-[40%] p-3 mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/gpu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">La GPU</strong> </h2>
              <p className="text-white-30 leading-relaxed p-10 mb-4">
                Dopo la bestia di CPU che ho scelto, dovevo scegliere una GPU che le stesse dietro. <br />
                Anche in questo caso ho optato per AMD, più per la questione che la cotroparte NVIDIA ha il brutto vizio di pompare troppo i prezzi di GPU con capacità molto elevate in Ray Tracing, una tecnologia molto avanzata per il rendering di luci nei videogiochi, molto bello per carità, ma non mi ha attirato tanto quanto l'enorme quantità di VRAM in più che hanno le serie AMD. <br />
                All'inizio la scelta era ovvia: la RX 6800, scheda video che mi aveva attirato per le prestazioni elevate e per un prezzo quasi troppo basso, quella che era veramente l'unica pecca era il fatto che era della vecchia serie, cioè le 6000, erano uscite già da un po' le 7000. < br />
                Mi è caduto il mondo addosso quando sono terminate le scorte della RX 6800, un affare troppo bello per non approfittarne, sono quindi passato alla serie successiva e trovando un affare su BPM power ho optato per la RX 7900 XT, la seconda scheda video più potente di AMD fino all'uscita della serie successiva tempo dopo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAM */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Le RAM</strong> </h2>
              <p className="text-white-30 p-10 leading-relaxed mb-4">
                A questo punto avevo chiare le prestazioni del PC che stavo progettando: una bomba da gaming e rendering. <br />
                Dovevo a quel punto trovare tutti i componenti "secondari", la parte facile diciamo. <br />
                Per quanto riguarda le RAM, la scelta è stata piuttosto semplice: 2 banchi DDR5 da 16Gb l'uno, 6000 MHz, CL30. Pulito pulito e ho optato per lo sweet spot per un prezzo onesto.
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/ram.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* schedamadre */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 ml-3">
            <div className="w-full md:w-[40%] lg:w-[40%] p-3 mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/schedamadre.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">La Scheda Madre</strong> </h2>
              <p className="text-white-30 leading-relaxed p-10 mb-4">
                Dopo le RAM , dovevo decidere la base su cui montare tutto, che doveva essere all'altezza degli altri componenti: avendo scelto una CPU AMD serie 7000, e delle ram da 6000 MHz, la scelta giunse su una B650 per forza di cose. <br />
                Scelto la tipologia mi mancava il modello, davvero troppa scelta, all'inizio ero orientato verso la B650 eagle ax, estremamente conveniente, compatibile elevata, ma poi, come con la GPU, è terminata, ho quindi deciso di optare per la B650 Aorus ELite Ax v2, prestazioni elevate, compatibilitò quasi eccessiva che mi permette tutt'ora di aggiornare il PC senza doverla cambiare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* case */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Il Case</strong> </h2>
              <p className="text-white-30 p-10 leading-relaxed mb-4">
              Sapendo che sarebbe stata un'ardua sfida ho iniziato poi a cercare un case capace di ospitare tutti i componenti e che mi piacesse esteticamente. <br />
                Tutte le opzioni che ho visto sono veramente troppe per descriverle qui, mi servirebbe un altro sito. <br />
                Insomma, alla fine ho optato per l' Antec C8, un modello doppia camera, design pulito, sobrio, con enorme spazio interno, e possibilità di montare al suo interno molteplici ventole.  
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 overflow-hidden bg-black">
              <img
                  src="/case.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ssd */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 ml-3">
            <div className="w-full md:w-[40%] lg:w-[40%] p-3 mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/ssd.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">L' SSD</strong> </h2>
              <p className="text-white-30 leading-relaxed p-10 mb-4">
                 Era poi necessario scegliere l'ssd, il mio obiettivo era trovare 1 Tb di spazio, a buon prezzo, con velocità di scrittura e lettura elevate: il WD_black SN 850x mi ha dato esattamente ciò che cercavo grazie soprattutto al prezzo vantaggioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* radiatore */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Il Dissipatore</strong> </h2>
              <p className="text-white-30 p-10 leading-relaxed mb-4">
              Ho successivamente notato che mancava il modo di raffreddare il processore, inizialmente pensavo a un dissipatore tranquillo ad aria che sarebbe andato benissimo con il processore scelto, poi ho ragionato sulla questione di aggiornabilità, e ho deciso di mantenere il livello medio dei componenti optando per un sistema a liquido AIO, un po' più costoso, complesso da montare ma sicuramente più performante. < br />
                La scelta vergeva su thermalright, una garanzia, ma poi, rassegnato al fatto di non essere fortunato per quanto riguarda le scorte, ho scelto un modello Arctic, più precisamente il Freezer 360 iii, prestazioni effettivamente migliori per un prezzo leggermente maggiore, poteva andarmi peggio.
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/radiatore.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* psu */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 ml-3">
        <div className="w-full md:w-[40%] lg:w-[40%] p-3 mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/psu.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">La PSU</strong> </h2>
              <p className="text-white-30 leading-relaxed p-10 mb-4">
                Era giunto il momento di scegliere quello che avrebbe alimentato tutto il sistema. <br />
                Dopo ricerche e analisi di consumi, sono giunto a conoscenza del fatto che mi sarebbe servito un alimentatore da almeno 750W, per quanto riguarda la certificazione, ero già convinto di prendere un modello di buono livello. < br />
                Dopo mesi di comparazione di prezzi, prestazioni, garanzie, e certificazioni ho optato per il modello MSI MPG A850W 80+ gold, prestazioni elevatissime, prezzo onesto, e certificazione gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fans */}
      <section className="p-8">
        <div className="max-w-7xl mx-auto rounded-3xl border-2 border bg-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
             <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Le Ventole</strong> </h2>
             <p className="text-white-30 p-10 leading-relaxed mb-4">
              E per ultime, ma non per importanza: le ventole. <br />
                Il case scelto non include alcuna ventola, quindi mi serviva una soluzione, la convenienza mi ha portato a scegliere ventole da 120mm, lo standard, almeno per queste sono riuscito ad approfittare di thermalright: 2 kit da 3 ventole e 1 singola.
              </p>
            </div>
            <div className="w-full md:w-[40%] lg:w-[40%] mx-3 mt-3 mb-3 ml-auto rounded-3xl border-3 border-blue-400 bg-black">
              <img
                  src="/fans.jpg"
                  alt="Ricerca componenti"
                  className="w-6xl h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

        </>    
);
}
