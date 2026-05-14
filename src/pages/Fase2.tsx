export default function Fase2() {
  return (
    <>
       <section id="fase2" className="min-h-20 p-8 pt-1">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mt-8 mb-10 text-center"> <strong className="text-5xl text-[#4ade80]">Fase 2: l'assemblaggio</strong> </h2>
        </div>
      </section>

      {/*Fase 1*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Preparazione dei componenti</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
           Tutto parte da qui: le scatole sul tavolo, ancora chiuse, ognuna con il suo pezzo di puzzle dentro. <br></br>
           CPU, scheda madre, RAM, SSD, dissipatore, PSU, GPU, case — vederli tutti insieme per la prima volta è stato qualcosa di veramente soddisfacente e assurdamente eccitante. <br></br>
           Prima di toccare qualsiasi cosa, si controlla che non manchi niente, si legge qualche istruzione, e si crea uno spazio di lavoro pulito e ordinato, ho passato letteralmente mesi a informarmi, a studiare, a guardare video su youtube in attesa di questo momento. <br></br> 
           </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase1.webp"
              alt="fase1"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

      {/*Fase 2*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Sulla scheda madre...</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
            La scheda madre si lavora fuori dal case, su una superficie piatta e non ruvida, in modo da salvaguardiare i collegamenti dietro di essa. <br></br>
            Prima la CPU, un gesto che richiede calma e precisione, niente forza, la si appoggia nello slot dedicato, al centro della scheda madre, e poi si chiude la copertura, solamente ora non bisogna avere paura di metterci della forza. <br></br>
            Poi l'SSD nel suo slot M.2, la RAM negli slot giusti cioè A2 e B2 (il secondo e il quarto) così da sfruttare il dual channel, e infine il supporto per il dissipatore. <br></br>
            È la fase più delicata: componenti piccoli, connettori fragili, e zero margine di errore. Ma è anche quella in cui la build inizia a prendere forma per la prima volta.
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase2.webp"
              alt="fase2"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

      {/*Fase 3*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Nel case...</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
            A questo punto si inserisce la scheda madre nel case, avvitata agli standoff. <br></br>
            Da qui: ho posizionato 3 ventole sotto in aspirazione (aspirano aria fredda dal basso e la buttano dentro al case), 3 sopra in estrazione che invece buttano fuori l'aria calda prodotta nel case,e una laterale, anche lei in estrazione. <br></br>
            La PSU trova il suo posto nella seconda camera del case, dietro alla scheda madre, e il dissipatore viene montato sulla CPU, il radiatore invece l'ho inserito di lato, se lo avessi montato sopra avrebbe aspirato aria calda per raffreddare il liquido, in basso invece avrei avuto problemi con la pompa del liquido. <br></br>
            Il case inizia a riempirsi, e ogni componente ha il suo spazio preciso e funzionale. Ordine e pazienza sono necessari in questa fase, ma non quanto per la prossima operazione...
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase3.webp"
              alt="fase3"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

      {/*Fase 4*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Il terrore</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
          Purtroppo, doveva arrivare anche questa fase: il CABLE MANAGMENT<br></br>
          I cavi sono il confine tra un PC funzionante e un PC bello. Alimentazione della scheda madre, della GPU, delle ventole, i connettori per le porte frontali del case, i connettori per installare in serie tutte le ventole... i cavi non finiscono più.<br></br>
          Ogni cavo va guidato dietro il pannello, legato, nascosto. Non cambia nulla in termini di prestazioni, ma cambia tutto in termini di soddisfazione e sanità mentale. <br></br>
          Si può vedere un buon cable management come il rispetto che si porta alla propria creazione e il mezzo per compiere un lavoro pulito e ordinato.<br></br>
          È stato estremamente complesso come procedimento, e tutt'ora ogni tanto, quando pulisco il PC e ci guardo, se la pazzia mi colpisce ci magheggio un po'.  Devo però dire che sono assolutamente soddisfatto di come uscì il lavoro, ho sempre avuto un po' la fissazione dell'ordine, e in questo caso ho dato tutto me stesso, può non colpire subito a vista d'occhio ma senza conoscere l'impegno e la disperazione conosciuti nel mentre è difficile apprezzarlo.
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase4.webp"
              alt="fase4"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

      {/*Fase 5*/}
      <section className="p-8">
        <div className="max-w-7xl mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">la bestia</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
            E finalmente, anche il componente più costoso trova il suo posto nel case: la GPU<br></br>
            È l'ultimo pezzo grande: si inserisce nel PCIe x16, si avvitano 3 viti negli slot laterali, e si collegano i cavi di alimentazione. <br></br>
            È il componente più imponente della build e da questo momento, il PC è fisicamente completo.
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase5.webp"
              alt="fase5"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>

      {/*Fase 6*/}
      <section className="p-8">
        <div className="max-w-7xl mb-20 mx-auto border-2 rounded-3xl border bg-white/10">
          <div className="flex items-center">
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-1 text-center"> <strong className="text-3xl text-[#4ade80]">Il PRIMO AVVIO</strong> </h2>
          <div className="text-white-30 p-10 leading-relaxed mb-10">
            Il momento della verità. Si collega il monitor, si attacca alla corrente, si preme il tasto di accensione. <br></br>
            Quei primi secondi di attesa valgono ore di lavoro e anni di ricerca. <br></br>
            Se l'icona del BIOS appare, la build è riuscita e da lì si parte con l'installazione del sistema operativo e la configurazione finale. <br></br>
            Poche soddisfazioni sono paragonabili a vedere accendersi qualcosa che hai ambito per anni e finalmente costruito con le tue mani.<br></br>
            Ho premuto il tasto di accensione: le ventole sono partite... hanno preso colore... è comparsa l'icona di gigabyte sul monitor... nessun suono strano o scintille... ce l'avevo fatta, avevo finalmente assemblato il PC, e la cosa ancora più bella è che funzionava al primo avvio, anni di ricerche e informazioni sono valse tutto.<br></br>
            È tranquillamente rientrato trai momenti più soddisfacenti della mia vita, è veramente difficile esprimere quanto sono stato contento e fiero, ed ora, toccava ad una parte forse più spaventose del cable managment: l'installazione del mio caro e odiato WINDOWS.
          </div>
          <div className="flex justify-center mb-10">
            <img
              src="/fase6.webp"
              alt="fase6"
              className="w-6xl h-full object-cover rounded-3xl border-3 border-blue-400 "
            />
          </div>
        </div>
      </section>
      
   

    </>
  );
}