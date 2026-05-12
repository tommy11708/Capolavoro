export default function HomePage() {
  return (
    <>
      <section className="min-h-40 p-8">
        {/* Qui puoi aggiungere caselle di testo e immagini */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mt-30 mb-20 text-center"> <strong className="text-6xl text-[#4ade80]">L'assemblaggio di un sogno</strong> </h2>

          {/* Esempio di casella di testo */}
          <div className="p-6 rounded-lg mt-50 mb-8 rounded-3xl border-2 border bg-white/10">

            <p className="text-white-300 leading-relaxed">
              Nell' estate del 2024 sono, dopo anni che lo ambivo, finalmente riuscito ad assemblare il mio primo PC fisso. <br></br>
              Ho sempre avuto un computer portatile con prestazioni medie-basse, ma sono riuscito a sfruttare l'inizio della terza superiore e il fatto che avrei dovuto usare software come Solid Edge per usufruire delle ricerche che per pura passione svolgevo già da almeno 3 anni, e ho concretizzato il mio sogno: assemblarmi una bestia di PC. <br></br> 
              
              In seguito parlerò di come ho scelto tutti i componenti, e di come ci ho messo mano assemblando il tutto, ma per ora vorrei fare una panoramica del mio PC e dei componenti descrivendone brevemente la funzione.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}