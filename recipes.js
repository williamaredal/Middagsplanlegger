// add feature where recipe has ingredients and instructions in nested dictionaries
/* 
// Recipe template
    "" : {
      "Ingredients" : {

      },
      "Recipe" : `

`
    },
 
*/
const Recipes = {
  "Spagetti Bolognese": {
    Ingredients: {
      "ss margarin": 0.5,
      "g kjøttdeig": 100, // kjøttdeig/karbonadedeig
      "g hakkede tomater": 97.5,
      "stk hvitløksbåt": 0.5,
      "ts pepper": 0.33,
      "ts salt": 0.5,
      "g spagetti": 100,
    },
    Recipe: `Spagetthi Bolognese oppskrift
1. Kok pastavann for pasta. 
2. Stek kjøttdeig til gylden utside. La putre med persille til den blir tykkere. Pasta vann for å tynne. 
3. Hakk hvitløksbåter i små biter. Hell i hakkede tomater, hvitløksbiter, salt og peppet i stekepannen.
4. Kombiner når pastaen er ferdig.
`,
  },

  "Pasta med kremet sopp": {
    Ingredients: {
      "g sopp": 100,
      "stk løk": 0.13,
      "stk hvitløksbåt": 0.5,
      "ss smør": 1,
      "dl matfløte": 1.5,
      "ss soyasaus": 0.5,
      "g frisk spinat": 50,
      "g tagliatelle": 100,
      "g parmesan": 15,
    },
    Recipe: `Pasta med kremet sopp oppskrift
  
  1. Vask og rens soppen, og del den om nødvendig i mindre biter.
  2. Finhakk løk og hvitløk.
  3. Smelt smør i en stekepanne og fres sopp og løk myk og gyllen. Krydre med litt salt og pepper.
  4. Tilsett fløte og la det hele koke opp. Smak til med soyasaus, salt og pepper.
  5. Kok pasta etter anvisning på pakken. Bruk litt av pastavannet i sausen om den tykner for mye. 
  6. Vend spinat inn i sausen rett før servering.
  7. Fordel pasta i tallerkener og topp med soppsausen. Riv parmesan over.`,
  },

  "Ørret med fløtestuede grønnsaker": {
    Ingredients: {
      "g ørretfilet": 200,
      "ss smør": 0.5,
      "stk vårløk": 0.5,
      "g sukkererter": 12.5,
      "g brokkoli": 25,
      "g kokte poteter": 50,
      "dl edamamebønner": 0.5,
      "dl matfløte": 0.75,
      "ss dill": 0.5,
    },
    Recipe: `Ørret med fløtestuede grønnsaker oppskrift
  
  1. Fjern skinnet og del ørretfileten i jevnstore porsjonsstykker. Krydre med litt salt og pepper.
  2. Varm en stekepanne med smør. Når det bruser godt kan du legge i fiskestykkene med undersiden opp. Stek på middels varme i ca. 2 minutter, og snu deretter stykkene. Trekk pannen til side og la fiskestykkene bli ferdige på ettervarmen. Øs litt av smøret over dem underveis.
  3. Kutt vårløk og sukkererter i biter på skrå og brokkoli i små buketter. Del poteter i to eller fire.
  4. Hell fløten i en kjele eller sauteringspanne og kok opp. Ha alle grønnsakene i kjelen og la det koke i 2-3 minutter, til fløten tykner litt og grønnsakene er knapt møre. Bland inn hakket dill. Smak til med salt og pepper.`,
  },

  "Chili con carne": {
    Ingredients: {
      "g kjøttdeig": 100, // kjøttdeig/karbonadedeig
      "ss margarin": 0.5,
      "stk løk": 0.25,
      "stk hvitløksbåt": 0.5,
      "stk rød chili": 0.25,
      "g hakkede hermetiske tomater": 100,
      "g chilibønner": 100,
      "g mais": 35,
      "stk grønn paprika": 0.25,
      "ts chilipulver": 0.38,
      "ts malt spisskummen": 0.13,
      "ts salt": 0.13,
    },
    Recipe: `Chili con carne oppskrift
1. Finhakk chili, og fjern frøene.
2. Ha margarin eller olje i en varm gryte. Vent til margarinen slutter å bruse, og brun kjøttdeig i to omganger sammen med løk, hvitløk og chili.
3. Hell over hermetisk tomat og la det surre i 3-4 minutter.
4. Drener maisboksen og tilsett maisen.
5. Bland inn chilibønner, paprika og krydder. La det koke et par minutter og smak til med salt.

Server gjerne gryteretten med salat og grove minibaguetter.
`,
  },

  Blomkålsuppe: {
    Ingredients: {
      "stk blomkål": 0.5,
      "stk purre": 0.125,
      "ss margarin": 0.25,
      "l helmelk": 0.25,
      "stk kyllingbuljong": 0.15,
      "ts salt": 0.125,
      "ts pepper": 0.06,
      "stk hvitløksbaguette": 0.5,
    },
    Recipe: `Blomkålsuppe oppskrift
1. Del blomkål i små biter og purre i skiver. Fres i en stor gryte med smør i 5 minutter.
  TipsØnsker du en tykkere suppe, kan du ha i mer blomkål!

2. Hell i melk og buljong (ca 5 dl vann pr terning) og kok til blomkålen er mør, ca. 20 minutter.
3. Fisk ut noen fine blomkålbiter til garnityr og kjør suppen glatt med en stavmikser eller i en blender.
4. Smak til med salt og pepper og server med brød og smør. Server suppen med hvitløksbaguetter.
`,
  },

  "Kremet Fiskesuppe": {
    Ingredients: {
      "stk fiskebuljong": 0.25, // erstatte med dl buljong?
      "stk gulrot i biter": 0.5,
      "dl melk": 0.5,
      "ss hvetemel": 0.5,
      "g laks": 50,
      "g torskefilet": 50,
      "g frosne erter": 20,
      "dl kremfløte": 0.25,
      "ts salt": 0.13,
      "ts pepper": 0.13,
      "ss frisk gressløk": 0.25,
    },
    Recipe: `Kremet Fiskesuppe oppskrift
1. Kok opp vann i en gryte (6 dl vann pr terning buljong), ha i fiskebuljongen og legg i gulrotbitene. La dem koke i 3-4 minutter.
2. Bland melk og hvetemel i et glass med skrulokk, og rist godt. Hell blandingen i fiskebuljongen mens du visper hele tiden. La suppen småkoke i ca. 5 minutter.
3. Senk temperaturen og legg i fiskebiter og erter. La suppa trekke i ca. 5 minutter. 
4. Rør inn fløten og smak til med salt og pepper. Dryss over finklippet gressløk.

Server gjerne suppen med brød eller flatbrød.
`,
  },

  "Pasta Carbonara": {
    Ingredients: {
      "g bacon": 50,
      "g fersk spagetti": 125,
      "stk egg": 1,
      "g parmesan": 15,
      "ss timian": 0.5,
      "ts pepper": 0.25,
    },
    Recipe: `Pasta Carbonara oppskrift
1. Bruker du fersk pasta, tar det kun 2 minutter å koke den i lettsaltet vann. Vent derfor med koking av pasta til resten er klart. Bruker du tørket pasta kan den koke mens du forbereder resten. Kok pastaen etter anvisning på pakken.
2. Skjær bacon, guanciale eller pancetta i terninger og stek dem i en middels varm stekepanne til de er gylne. Bruker du en stekepanne med slippbelegg trenger du ikke stekefett når du steker kjøttet - fettet som smelter ut vil være nok. Om du ikke har en slik panne kan det være lurt å steke i litt margarin eller olje.
3. Visp sammen hele egg, finrevet pecorino eller parmesan, timian og pepper. 
4. Ta vare på litt av pastavannet i en kopp.
5. Hell kokt pasta over i pannen med kjøttet. Trekk pannen av varmen og vend inn egg- og parmesanblandingen. Tilsett litt av pastavannet. Rør godt. Eggeblandingen vil tykne av varmen fra pastaen. Hvis pastaen blir litt klissete kan du ved tilsette et par spiseskjeer til av pastavannet.
6. Kvern over godt med svart pepper.

Server gjerne på varme tallerkener og høvle over litt mer ost ved servering. For å være ekstra råflott, kan du servere pastaen med en ekstra eggeplomme på toppen. La eggeplommen være i litt av skallet, og vipp den ut på pastaen før du begynner å spise.
`,
  },

  "Marry Me Chicken": {
    Ingredients: {
      "stk kyllinglår": 1,
      "ss olje": 1,
      "stk sitron": 0.5,
      "ss flytende honning": 1,
      "ss hakket frisk basilikum": 1,
      "ts salt": 0.5,
      "ts pepper": 0.5,
      "g pastaskruer": 100,
      "ss margarin": 1,
      "stk hvitløksbåt": 1.5,
      "stk kyllingbuljong": 0.3,
      "dl kremfløte": 1.5,
      "g parmesan": 25,
      "ts chiliflakes": 0.5,
      "ts tørket oregano": 0.5,
    },
    Recipe: `Marry Me Chicken oppskrift
1. Riv skallet til sitron(ene) og saft like mange i en bolle.
2. Bland sammen olje, sitron, honning, basilikum, salt og pepper i en stor bolle. Del kyllinglår(ene) i biter egnet for gaffel, og legg disse i blandingen til den er dekket. La kyllingen marinere i kjøleskapet i minst 30 minutter, men ikke mer enn en time (ellers kan det bli kraftig sitronsmak).
3. Kok pasta som anvist på pakningen.
4. Varm opp en stor stekepanne eller jerngryte og ha i margarin. Løft kyllinglår biter ut av marineringsvesken og stek disse på høy varme i 1-2 minutter på hver side til den har fått en gyllen skorpe. Ha lårene over i en ildfast form, og stek videre i ovnen på 200 °C i ca. 10 minutter.
5. Stek hvitløk i den samme pannen i ca. 1 min. Tilsett kyllingkraften (ca 5 dl pr buljong), og gi den et kjapt oppkok.
6. Senk varmen, og tilsett kremfløte og parmesan. La sausen småkoke i et par minutter, og smak til med krydrene; chiliflak, timian, oregano, salt og pepper. 
7. Vend kyllingbitene inn i sausen sammen med kokt pasta og server.  
`,
  },

  "Kylling med søtpotet og grønnkål": {
    Ingredients: {
      "g kylling overlår": 200,
      "stk søtpotet": 0.25,
      "g grønnkål": 62.5,
      "stk hvitløksbåt": 1.5,
      "ss olivenolje": 1,
      "stk sitron": 0.25,
      "ts salt": 0.5,
      "ts pepper": 0.25,
      "ss tørket oregano": 0.25,
      "g fetaost": 25,
    },
    Recipe: `Kylling med søtpotet og grønnkål oppskrift
1. Tørk kyllingbitene med litt tørkepapir og la dem ligge og temperere seg mens du forbereder resten av ingrediensene.
2. Skrell søtpoteten og skjær den i grove biter. Vask grønnkål og skjær vekk det groveste av stilken. Grovhakk hvitløk.
3. Ha litt olje i bunnen av en stor ildfast form eller langpanne. Legg kyllingbiter, søtpotet, grønnkål og hvitløk utover i formen slik at det ikke ligger oppå hverandre. Press sitronsaften og fordel den i pannen. Drypp over olivenolje og krydre med salt, pepper og oregano.
4. Plasser formen midt i ovnen på 200 °C og stek i 20-25 minutter til kyllingbitene er gjennomstekt og søtpoteten har fått fin, gyllen farge. Grønnkålen kan bli litt mørk i kantene.
5. Smuldre opp fetaost og strø over formen før servering.

Server kyllingformen med ris eller godt brød. 
`,
  },

  "Grønnsaksuppe med pølse": {
    Ingredients: {
      "stk røkt kjøttpølse": 0.25,
      "stk løk": 0.13,
      "stk potet": 0.75,
      "g sellerirot": 25,
      "stk gulrot": 0.5,
      "g kålrot": 25,
      "stk purre": 0.13,
      "stk brokkoli": 0.13,
      "l vann": 0.25,
      "stk kyllingbuljong": 0.5,
    },
    Recipe: `Grønnsaksuppe med pølse oppskrift
1. Skjær pølse i passe store biter. Finhakk løk.
2. Skrell poteter og resten av grønnsakene. Skjær poteter, sellerirot, gulrøtter og kålrot i terninger. Skjær purre i ringer og brokkoli i små buketter (og skjær stilken i biter)
3. Kok opp vann og buljong (ca 5 dl per terning). Ha i poteter og grønnsaker og kok dem i ca. 8 minutter til de er møre.
4. Tilsett pølsebitene og la dem bli varme. Smak til med salt og pepper.

Suppen passer godt sammen med rundstykker.
`,
  },

  Pannekaker: {
    Ingredients: {
      "dl hvetemel": 0.75,
      "dl melk": 1.25,
      "stk egg": 1,
      "ts salt": 0.33,
    },
    Recipe: `Pannekaker oppskrift
1. Kombiner tørrvarene hvetemel, salt i en bolle.
2. Tilsett melken gradvis under visping for å redusere antall klumper.
3. Rør inn egg, og stek røren i en stekepanne med litt margarin.
`,
  },

  "Arme riddere": {
    Ingredients: {
      "stk egg": 0.33,
      "ss sukker": 0.33,
      "dl melk": 0.33,
      "ts kardemomme": 0.08,
      "ts kanel": 0.17,
      "skive loff eller annet brød": 1,
      "ss smør": 0.17,
    },
    Recipe: `Arme riddere oppskrift
1. Visp egg lett sammen med sukker, melk og krydder og hell blandingen i et fat med kanter.
2. Legg brødskivene i røren og la dem bli gjennombløte.
3. Ta opp brødskivene og stek dem i litt margarin i en stekepanne på middels varme. Stek de arme ridderne på begge sider til de er pent gulbrune.

Server arme riddere med rørte bær eller syltetøy.
`,
  },

  "Scampipasta med frisk fløtesaus": {
    Ingredients: {
      "g spagetti": 100,
      "g scampi": 62.5,
      "stk hvitløksbåt": 1,
      "ts chiliflak": 0.13,
      "ss nøytral olje": 1.25,
      "stk sitron": 0.13,
      "dl fløte": 0.75,
      "g spinat": 25,
      "g parmesan": 25,
      "g persille": 5,
      "ts salt": 0.06,
      "ts pepper": 0.06,
    },
    Recipe: `Scampipasta med frisk fløtesaus oppskrift
1. Kok pasta som anvist på pakken, minus ett minutt. Mens pastaen koker, begynner du med sausen.
2. Finn frem en stor stekepanne, varm opp olje og stek hvitløk og chili i 1-2 minutter.
3. Ha fløte i panna og la koke til den begynner å tykne, ca. 5-7 minutter. Tilsett sitronsaft, revet sitronskall, spinat og persille.
4. Hell av pastavannet og sett til side til sausen er ferdig.
5. Ha parmesan i fløtesausen, og smak til med salt og pepper. Bland scampi og pasta i panna, sørg for at pastaen blir godt dekket av saus.
6. Dryss over litt revet sitronskall, parmesan og nykvernet pepper. Server!

`,
  },

  "Wok med biff og grønnsaker": {
    Ingredients: {
      "g biffstrimler": 125,
      "ts pepper": 0.38,
      "ss soyasaus": 1,
      "ts sesamolje": 0.75,
      "ss maisenna": 0.25,
      "ts bakepulver": 0.06,
      "stk hvitløksbåt": 1,
      "stk brokkoli": 0.25,
      "stk vårløk": 1,
      "g sopp": 37.5,
      "ss olje": 1,
      "g ris": 60,
    },
    Recipe: `Wok med biff og grønnsaker oppskrift
1. Rør sammen ingrediensene til sausen.
2. Finhakk eller finsnitt hvitløken. Del brokkolien i små buketter og skjær stilken i skiver. Rens og del vårløk og sopp i grove biter.
3. Varm litt olje i en wok- eller stekepanne. Stek kjøttet raskt over høy varme. Ikke ha for mye i pannen, stek det heller i flere omganger og hell kjøttet over på en tallerken så lenge.
4. Varm woken på nytt med litt olje. Tilsett brokkoli. Stek videre under stadig omrøring til brokkolien er knapt mør. Tilsett gjerne en dæsj med vann underveis i stekingen så brokkolien dampes knapt mør.
5. Ta brokkolien ut av pannen så lenge. Fortsett med å steke soppen, tilsett hvitløk og vårløk og stek videre under omrøring i et lite minutt.
6. Ha kjøtt og brokkoli tilbake i pannen. Hell over sausen og bland alt godt sammen. Dryss over cashewnøtter og server.
`,
  },

  "Ramen med kylling og egg": {
    Ingredients: {
      "ss sesamolje": 0.25,
      "ss olje": 1.25,
      "stk sjalottløk": 0.25,
      "stk hvitløksbåt": 0.5,
      "ss ingefær": 0.25,
      "ts chili explosion": 0.25,
      "stk sitrongress": 0.25,
      "dl kyllingkraft": 3.75,
      "ss soyasaus": 0.5,
      "ts sukker": 0.25,
      "stk lime": 0.125,
      "stk kyllingfileter": 1,
      "g ramennudler": 50,
      "stk gulrøtter": 0.5,
      "stk vårløk": 1,
      "g babyspinat": 25,
      "g sukkerter": 12.5,
      "g sesamfrø": 5,
      "stk egg": 1,
    },
    Recipe: `Ramen med kylling og egg oppskrift
(Kok egg før oppskriften, eller mens kyllingen er i ovnen)
1. Sett stekeovnen på 175 grader, over- og undervarme. Krydre kyllingfiletene med salt og pepper, og stek dem i nøytral olje i middels varm stekepanne på begge sider i ca. 2 minutter, til filetene er gylne og fine på begge sider. Legg kyllingen over på et ildfast fat og la den steke ferdig i stekeovnen, til den har en kjernetemperatur på ca. 67 grader. Det tar 10–15 minutter, men vil være avhengig av størrelsen på filetene og hvor lenge du har brunet dem i stekepannen.
2. Finn frem en kjele og ha i sesamolje og nøytral matolje. Stek sjalottløk på middels varme et par minutter, og tilsett deretter ingefær, hvitløk og chili, og la det surre med i ca. ett minutt.
3. Tilsett kyllingkraft (eller utblandet kyllingfond) og kok opp.
4. Bank på sitrongresset med skaftet på en kniv eller lignende for å frigjøre de gode smakene, og ha det i kjelen. La alt stå og småkoke i ca. 10 minutter. 
5. Smak til med soyasaus, sukker og limesaft. Hold kraften varm.
6. Kok nudlene etter anvisningen på pakken og skjær opp grønnsakene i staver.
7. Legg kylling, grønnsaker og nudler i en vid suppebolle og hell den rykende varme kyllingkraften over. Del eggene i to og legg dem oppå, og gi retten et dryss av chiliflak og sesamfrø. 

Tips
I stedet for kyllingkraft kan du benytte utblandet kyllingfond eller buljong. Bland ut fonden/buljongen etter anvisningen på emballasjen, eller etter smak.
Bruk gjerne ferdig grillet kylling hvis du har det travelt.
`,
  },

  "Kjøttkaker med potetmos og grønnsaker": {
    Ingredients: {
      "kg potet": 0.25,
      "g kjøttkaker": 150,
      "g brokkoli": 30,
      "g blomkål": 30,
      "pakke brun saus": 0.25,
      "g smør ": 25,
      "l melk": 0.25,
      "ts salt": 0.06,
      "ts pepper": 0.06,
    },
    Recipe: `Kjøttkaker med potetmos og grønnsaker oppskrift
1. Kok opp potetene i en kjele med vann.
2. Begynn å koke opp brune sausen når potetene begynner bli myke (trenger ca 5 min koketid).
3. Stek kjøttkakene til de blir gylne.
4. Kok frossne grønnsaker til de blir varme (ca 3 min). Tilsett erter/andre grønnsaker for økt variasjon.
5. Når potetene er myke, tøm kjelen for vann. Tilsett så smør, melk og mos det til ønsket konsistens. Smak til med salt og pepper.
`,
  },

  "Kylling Toro Tandori": {
    Ingredients: {
      "stk kyllingfillet": 0.5,
      "stk creme fraise": 0.25,
      "tandori pose toro": 0.25,
      "g ris": 60,
    },
    Recipe: `Kylling Toro Tandori oppskrift
1. Følg oppskriften på tandori posen med forbehold for antall porsjoner.
`,
  },

  "Stekt ris med kylling": {
    Ingredients: {
      "g Kyllingfillet": 62.5,
      "ss soyasaus": 1,
      "ts pepper": 0.1875,
      "ss sesamolje": 0.25,
      "ss vann": 0.25,
      "ts sukker": 0.25,
      "ts salt": 0.125,
      "g ukokt jasmin ris": 68.75,
      "g frosne erter": 25,
      "stk egg": 0.5,
      "stk gulrot": 0.25,
      "stk vårløk": 0.25,
      "stk løk": 0.25,
      "stk hvitløksbåt": 0.25,
    },
    Recipe: `Stekt ris med kylling oppskrift
1. Kok opp ris.
2. Start med dele kyllingen i spisestore biter og mariner i minst ti minutter.
3. Imens forbereder du grønnsakene og blander sammen sausen.
4. Varm en panne på medium høy varme med 1 spiseskje olje.
5. Når pannen er varm, visper du sammen to egg og har i oljen. Bruk spisepinne eller slikkepott for å lage sirkler til du får en myk og saftig eggerørekonsistens.
6. Legg eggene over på en tallerken.
7. Så freser du hvitløk og løk i samme panne med olje på medium varme. Når hvitløken har fått en lys gyllen farge, tilsetter du kyllingen og steker til den er gjennomstekt.
8. Ha i gulrøtter og erter, og stek i to minutter til før du tilsetter kokt ris.
9. Ha deretter i sausen og bland godt i tre-fire minutter så sausen får trekke inni.
10. Legg tilbake eggene og ha i vårløken. Bland godt en siste gang.
11. Server gjerne med Sriracha for et ekstra «kick». Du kan også ha på chili flakes eller lignende om du ønsker.
12. TIPS: Mørk soyasaus gir en veldig fin farge til risen, men om du ikke har tilgang, kan du sløyfe denne og smake til med litt mer soyasaus og oystersaus om ønskelig.
`,
  },

  "One pot kremet pasta med kjøttdeig": {
    Ingredients: {
      "g kjøttdeig": 125,
      "stk rødløk": 0.25,
      "stk paprika": 0.25,
      "g Philadelphia light": 37.5,
      "g parmesan": 7.5,
      "g spinat": 7.5,
      "ts pepper": 0.25,
      "ts vitløkspulver": 0.25,
      "ts paprikapulver": 0.25,
      "ts chiliflakes": 0.25,
      "g pasta": 62.5,
      "dl vann": 1.5,
      "g ajvar": 12.5,
    },
    Recipe: `One pot kremet pasta med kjøttdeig oppskrift
1. Skjær rødløken og paprika i små terninger.
2. Stek kjøttdeig i en kjele til den blir brun. Tilsett så rødløk og paprika, og la steke noen minutter.
3. Tilsett pastaen og vann, skru ned varmen til lav og kok med lokk til pastaens anbefalte tid.
4. Tilsett Philadelphia, ajvar, parmesan og spinat. Rør så inn ingrediensene sammen til en fløtemyk konsistens og server.
`,
  },

  "Pasta a la vodka": {
    Ingredients: {
      "ss olivenolje": 1.25,
      "stk gul løk": 0.25,
      "stk hvitløksbåt": 0.75,
      "ss tomatpure": 0.5,
      "dl fløte": 0.75,
      "ts salt": 0.5,
      "ts pepper": 0.25,
      "ts chiliflak": 0.25,
      "ts hvitløkspulver": 0.25,
      "ts paprikakrydder": 0.25,
      "ss smør": 0.5,
      "g parmesan": 15,
      "dl pastavann/vodka": 0.25,
      "g penne pasta": 100,
    },
    Recipe: `Pasta a la vodka oppskrift
1. Start med å sette på pastavann og ha i litt salt. Kok pasta som anvist på pakken. Ta vare på ca. 1 dl pastavann.
2. Kutt opp løk og hvitløk. Varm olivenolje i en dyp stekepanne eller jerngryte og stek løken til den blir myk, uten at den tar farge.
3. Tilsett hvitløken og la det frese noen minutter under omrøring.
4. Tilsett tomatpuré og bland godt. Hell i fløten og rør sammen til en kremet tomatsaus.
5. Smak til med salt, pepper, paprikakrydder, chiliflak og hvitløkspulver. Juster krydderet etter ønske for å gjøre sausen mer spicy.
6. Ha i smør, parmesan og pastavann eller vodka. La det småkoke i noen minutter under omrøring.
7. Bland pastaen inn i sausen, og server med ekstra parmesan, chiliflak og litt persille.
`,
  },

  Lasagne: {
    Ingredients: {
      "stk lasagneplater": 2.25,
      "dl revet hvitost": 0.75,
      "g parmesan": 12.5,
      "g bacon": 37.5,
      "ss olje": 0.75,
      "g kjøttdeig": 100, // kjøttdeig/karbonadedeig
      "stk løk": 0.25,
      "stk gulrot": 0.25,
      "stk stangselleri": 0.25,
      "ss tomatpuré": 0.5,
      "g hakkede hermetiske tomater": 100,
      "dl kjøttkraft": 0.5,
      "ts oregano": 0.5,
      "ss smør": 0.75,
      "ss hvetemel": 0.75,
      "dl melk": 1.5,
      "ts salt": 0.25,
      "ts pepper": 0.13,
      "ts revet muskatnøtt": 0.13,
    },
    Recipe: `Lasagne oppskrift
1. Skjær bacon i små biter. Ha olje i en varm panne og stek til baconet til det er gyllent. Ha i litt mer olje og brun kjøttdeig i olje på sterk varme i to omganger.
2. Senk varmen litt og ha i løk, gulrot og stilkselleri og la det steke til grønnsakene er blitt myke og blanke. Ha baconet og kjøttdeigen tilbake i stekepanna og bland alt sammen.
3. Lag en grop i midten av stekepannen. Ha i litt mer olje og fres tomat puréen i noen minutter. Ha i hermetisk tomat, kraft og krydder. La kjøttsausen småkoke i minst 10 minutter, til den begynner å tykne. Har du litt god tid? La gjerne sausen småkoke under lokk i ca. 1 ½ time, for å utvikle ekstra god smak. Husk å rør litt i kjelen underveis, slik at det ikke fester seg på bunnen av gryta. Smak til med salt og pepper.
4. Smelt smør i en kjele og rør inn mel. Spe med melk under omrøring og la sausen koke i ca. 10 minutter. Den skal være forholdsvis tykk. Ha i parmesan og la osten smelte. Smak til ostesausen med krydder.
5. Legg kjøttsaus, pastaplater og ostesaus lagvis i en ildfast form. Avslutt med pastaplater og ostesaus. Dryss over revet ost til slutt.
6. Sett formen i stekeovn på 200° C og stek i 30-40 minutter. Kjenn etter med en pinne eller spiss kniv om pastaen er mør. La lasagnen hvile noen minutter før servering.

Server gjerne med baguette og en grønn salat ved siden av.
`,
  },

  "Good Soup": {
    Ingredients: {
      "g cherrytomater": 125,
      "stk hvitløk": 0.25,
      "stk løk": 0.25,
      "ts olivenolje": 0.25,
      "ts timian": 1,
      "stk selleri": 0.25,
      "ss tomatpure": 0.25,
      "stk kyllingbuljong": 0.25,
      "dl kremfløte": 0.25,
      "skive grovt brød": 2,
      "g ost": 40,
      "g ost": 80,
      "ss smør": 0.25,
      "ts salt": 0.25,
      "ts pepper": 0.25,
    },
    Recipe: `Good Soup oppskrift:
1. Sett stekeovnen på 200 grader med over- og undervarme. Kutt toppen av hvitløken slik at feddene synes, og grovhakk løken.
2. Legg tomatene på et stekebrett sammen med hvitløk, løk, tørket timian, og rikelig med olivenolje. Stek grønnsakene til de er gyllne og litt brent.
3. Ha 1 ss olivenolje i en liten suppekjele, tilsett finhakket selleri og tomatpuré. Stek i 2 min på medium varme til sellerien er myk. Ha i de stekte grønnsakene, og skvis ut de myke hvitløksfeddene fra den bakte hvitløken.
4. Tilsett kyllingbuljong og bruk en stavmikser til suppen er glatt. Varm opp på medium varme til suppen er rykende varm.
5. Skjær brødet i skiver, legg på gulost og litt Vesterhavsost, og lag dobbeltskiver. Smelt smør i en stor stekepanne på medium/lav varme og stek toastene 4 min på hver side til de er gylne og osten smeltet.

Server suppen i en liten skål og dypp toasten.
`,
  },

  "Lakseburger med Søtpotet Fries": {
    Ingredients: {
      "stk lakseburger": 1,
      "stk brioche burgerbrød": 1,
      "g coleslaw salat": 62.5,
      "stk søtpotet": 0.75,
      "ts salt": 0.25,
    },
    Recipe: `Lakseburger med Søtpotet Fries oppskrift:
1. Skru på ovnen på varmluft 230 C.
2. Skrell og kutt søtpotet til fries biter.
3. Strø salt over søtpotet fries og stek de 20 min i ovnen, eller til de er gylne og sprø.
4. Stek lakseburger(e) (og brioche brødene for ekstra krisphet) i en stekepanne.
5. Kombiner burger, brød og coleslaw salat (topp med lime eller ekstra dressing for økt smak).
`,
  },

  "Butter Chicken": {
    Ingredients: {
      "stk rødløk": 0.25,
      "g kyllingfileter": 162.5,
      "ss gurkemeie": 0.5,
      "ts spisskummen": 0.5,
      "ss garam masala": 0.25,
      "ss koriander": 0.25,
      "ts chiliflak": 0.125,
      "ts pepper": 0.125,
      "ts salt": 0.25,
      "ss ingefær": 0.25,
      "stk hvitløksbåt": 0.25,
      "ss sitronsaft": 0.5,
      "ss olje": 0.5,
      "g hakkede hermetiske tomater": 100,
      "dl Creme Fraiche 17%": 0.5,
      "ss honning": 0.25,
      "ss smør": 0.25,
      "g spinat": 16.25,
    },
    Recipe: `Butter Chicken oppskrift:
1. Skjær løken i tynne båter og kyllingen i biter på ca. 3x3 cm. Legg det i en bolle.
2. Bland gurkemeie, spisskummen, garam masala, malt koriander, chiliflak, pepper, salt, ingefær, hvitløk, sitronsaft og matolje. Ha blandingen over løk og kylling. Bland godt.
3. Varm opp en stor stekepanne på høy varme og stek kyllingen til den får en gyllen farge.
4. Tilsett hermetiske tomater, Crème Fraîche og honning. Rør til du får en jevn saus.
5. La det småkoke i noen minutter, og rør deretter inn smør og spinat.
6. Server med kokt ris, salat eller naanbrød.
`,
  },

  Okonomiyaki: {
    Ingredients: {
      "g hodekål": 125,
      "g hvetemel": 50,
      "ts bakepulver": 0.5,
      "ts salt": 0.25,
      "dl fiskebuljong": 0.5,
      "stk vårløk": 0.75,
      "stk egg": 1,
      "ss soyasaus": 0.5,
      "ss nøytral olje": 0.5,
      "ss ketchup": 1.25,
      "ss worcestersaus": 0.5,
      "ss østerssaus": 0.5,
      "ts honning": 0.5,
      "g majones": 10,
      "g gressløk": 2,
    },
    Recipe: `
1. Bland sammen mel, bakepulver og salt i en bolle. Hell i fiskekraften og bland raskt sammen. Knekk i ett og ett egg og visp til en klumpfri røre.
2. Tilsett så kålen, soyasausen og vårløk til slutt.
3. Varm en romslig stekepanne på middels varme. Tilsett 1 ss olje, og halvparten av okonomiyaki-røren og fordel den jevn utover i pannen. Legg på lokk og stek i 5 minutter.
4. Snu okonomiyakien ved å legge en tallerken på toppen av pannekaken og snu stekepannen. «Skli» pannekaken tilbake i stekepannen med den ustekte siden ned og stek gyllen på den andre siden også. Gjenta og lag den andre pannekaken.
5. Bland sammen ketchup, worcestersaus, soyasaus og honning I en liten skål, og fordel over pannekakene. Topp så med Kewpie (eller vanlig) majones, gressløk og server.
`,
  },

  "Rigatoni med salsicciasaus": {
    Ingredients: {
      "g rigatoni": 100,
      "g Salsiccia": 50,
      "stk hvitløksbåt": 0.5,
      "ss tomatpure": 1,
      "ss eddik": 0.5,
      "dl kremfløte": 0.75,
      "håndfull basilikumblader": 0.25,
      "ss olje": 0.25,
      "g parmesan": 5,
      "ts salt": 0.25,
    },
    Recipe: `
1. Press kjøttet ut av pølseskinnet. Stek kjøttet i en panne med litt olje som kjøttdeig.
2. Ha i hvitløk og stek videre i et par minutter.
3. Rør inn tomatpure, eddit og kremfløte. Kok opp og la det simre mens du koker pastaen.
4. Kok pastaen i saltet vann til den er al dente, og rør pastaen godt inn i sausen. Rør inn litt pastavann for å spe ut sausen.
5. Ha i basilikum, salt, og topp med olivenolje og parmesan. Server!
`,
  },
};

/*
 Commented out recipees (can get added in future)



    "Kjøttkaker med Ertepure" : {
      "Ingredients" : {
        "g kjøttdeig" : 100,
        "ts salt" : 0.25,
        "ts pepper" : 0.06,
        "ts malt muskat" : 0.06,
        "ts malt ingefær" : 0.06,
        "ss potetmel" : 0.5,
        "dl vann eller melk" : 0.38,
        "ss smør" : 1,
        "ss hvetemel" : 1,
        "stk buljong" : 0.5, // erstatte med dl buljong?
        "ts salt" : 0.13,
        "ts pepper" : 0.06,
        "g frosne erter" : 100,
        "dl kjøttbuljong" : 0.25,
        "ss smør" : 0.25,
        "ts pepper" : 0.06,
      },
      "Recipe" : `Kjøttkaker med Ertepure oppskrift
1. Bruk en foodprosessor. Ha alle ingrediensene i bollen og kjør i 10-20 sekunder, til farsen er jevn og fin.
2. Form farsen til runde kaker ved hjelp av en skje, hånden din, og kaldt vann.
3. Ha margarin i en middels varm stekepanne. Stek kakene i ca. 2 minutter på hver side til de har fått en fin bruning.
4. Lag brun saus ved å smelte smøret i en kjele. Tilsett hvetemel og brun over svak varme til blandingen får en nøttebrun farge. Spe med varm kraft eller buljong, og rør godt mellom hver gang du sper. La sausen småkoke i ca. 10 minutter. Smak til med salt og pepper.
5. Ha kakene over i brun saus og la dem trekke i ca. 10 minutter (til de er gjennomkokt).
6. Kok opp frosne erter i kjøttbuljong til ertestuingen. Mos alt med en stavmikser eller foodprosessoren. Du kan også bruke en potetmoser. Ha i smør og smak til med pepper.

Server kjøttkakene med brun saus, kokte poteter, grønn ertepuré og rørte tyttebær.
`
    },
 

    "Hjemmelaget Gnocchi" : {
      "Ingredients" : {
        "kg potet (melne)" : 0.25,
        "stk eggeplomme" : 0.5,
        "ss revet parmesan" : 1,
        "g hvetemel" : 37.5,
        "ts salt" : 0.5,
        "ts pepper" : 0.13,
        "ts malt muskat" : 0.06,
        "ss olivenolje" : 0.5,
      },
      "Recipe" : `Hjemmelaget Gnocchi oppskrift
1. Skrell poteter og kok dem i usaltet vann. Hell av vannet og ha kjelen tilbake på platen og damp potetene til vannet i bunnen er borte. La potetene stå på benken til de har avkjølt seg litt. (Tips: Har potetene blitt for kalde kan du enkelt varme de opp i mikroen igjen.)
2. Riv potene på den fineste siden av et rivjern, slik at du får en fin masse.
3. Lag en fordypning midt i haugen. Ha i eggeplommer og revet parmesan.
4. Bland sammen mel, salt, pepper og muskat og strø dette i fordypningen sammen med eggeplommene.
5. Bland alt sammen med hendene. Deigen vil være ganske løs i starten, så ha i litt og litt mel til du har fått en smidig deig.
6. Del deigen i mindre biter som du skal rulle ut til lange pølser. Når du har rullet ut deigen, så deler du de opp i mindre biter.
7. Bruk en gaffel og klem forsiktig på putene slik at du får de karakteristiske gnocchimønsteret, eller lag de akkurat som du måtte ønske. Dryss over litt ekstra mel underveis.
8. Kok opp en stor kjele med vann. Ha i salt og kok gnocchi til de flyter opp til toppen. Da er de ferdig kokt. Ikke kok for mange av gangen, da kan det hende at de går sammen. Fisk opp putene med en hullslev og ha på litt olivenolje.

Gnocchi kan fint fryses etter at de er ferdig kokt. Da har du en rask middag til senere i uken.
`
    },
 

    "Klassisk Bacalao" : {
      "Ingredients" : {
        "kg utvannet klippfisk" : 0.17,
        "kg løk" : 0.17,
        "kg potet" : 0.17,
        "stk rød chili" : 0.33,
        "stk hvitløksbåt" : 0.67,
        "g hakkede hermetiske tomater" : 200,
        "stk laurbærblad" : 0.67,
        "stk sorte oliven" : 5,
        "dl olivenolje" : 0.5,
        "ss hakket bladpersille" : 0.33,
      },
      "Recipe" : `Klassisk Bacalao oppskrift
1. Rens klippfisken for skinn og bein, og skjær den i ca. 2 cm tykke skiver. 
2. Skjær poteter og løk i ca. ½ cm tykke skiver.
3. Legg fisk, poteter og løk lagvis i en stor kjele.
4. Del chili på langs, skrap ut frøene og kutt den fint (bruk frøene også om du vil ha bacalaoen sterkere). Grovhakk hvitløk og legg i gryta sammen med laurbærblad, chili, oliven, tomater og olivenolje. Kok opp, senk varmen og sett på lokk. La bacalaoen småkoke  i ca. 1 time. Smak til med litt salt og pepper. Dryss over litt hakket persille ved servering.

Dette er en rett som man kan spise helt alene uten tilbehør, men mange serverer gjerne med ferskt, godt brød. 
`
    },


    "Boeuf Bourguignon" : {
      "Ingredients" : {
        "g benfri høyrygg av storfekjøtt , evt. bog" : 200,
        "ss smør" : 0.5,
        "dl kjøttkraft" : 0.75,
        "dl rødvin" : 1,
        "stk laurbærblad" : 0.25,
        "ts tørket timian" : 0.25,
        "stk sjalottløk" : 2.5,
        "stk gulrot i staver" : 0.5,
        "g frisk sjampinjong i båter" : 50,
        "g bacon" : 37.5,
      },
      "Recipe" : `Boeuf Bourguignon oppskrift
1. Skjær kjøtt i middels store terninger (4x4 cm). Brun små porsjoner kjøtt av gangen i en varm stekepanne med smør. Ha kjøttet over i en gryte og krydre med salt og pepper. 
2. Hell kraft og vin  i gryten. Tilsett laurbærblad og timian, og varm opp til kokepunktet. Senk varmen og la kjøttet trekke i ca. 1 ½ time.
3. Rens sjalottløk (skal brukes hele). Skrell gulrot og skjær dem i staver. Ha grønnsakene over i gryta og la det trekke i ytterligere 30 minutter.
4. Brun sjampinjong og bacon i en varm stekepanne. Ha det over i gryta rett før servering. Smak til med salt og pepper.

Server eventuelt med franske baguetter som tilbehør.
`
    },


    "Lammeskank med Appelsin" : {
      "Ingredients" : {
        "stk lammeskank" : 1,
        "ss olje" : 0.75,
        "stk løk" : 0.25,
        "dl kyllingkraft" : 0.75,
        "stk appelsin" : 0.5,
        "stk hvitløksbåt" : 2,
        "dl honning" : 0.25,
        "dl brunt sukker" : 0.25,
        "dl rødvinseddik" : 0.25,
        "stk hel kanel" : 0.5,
        "stilk frisk rosmarin" : 1,
        "kg melen potet" : 0.25,
        "ss smør" : 0.5,
        "dl melk" : 0.75,
        "g grønnkål" : 50,
        "g smør" : 37.5,
        "stk hasselnøtter" : 3.75,
      },
      "Recipe" : `Lammeskank med appelsin oppskrift
1. Tørk godt av lammeskankene og stell dem slik at de kan stå med beinpipen opp.
2. Varm en vid gryte (gjerne jerngryte) med litt av oljen og brun lammeskankene på alle sider. Krydre godt med salt og pepper. Løft skankene over på en tallerken.
3. Finhakk løk og fres den i resten av oljen til den er gyllen og myk.
4. Hell kraften i gryten sammen med appelsinsaft og -skall, hvitløk, honning, brunt sukker, rødvinseddik, hel kanel og rosmarinstilker. Kok opp.
5. Legg lammeskankene tilbake i gryten og bland godt, slik at skankene blir dekket av sausen. Om mulig, sett skankene slik at beinpipene peker oppover. Kok opp på nytt, sett på lokk eller dekk med folie og plasser gryten i stekeovnen på 150 °C 3 -3 ½ time.
6. Øk temperaturen i stekeovnen til 220 °C. Ta lokket av gryten og sett den tilbake i ovnen i ytterligere 25-30 minutter. Sausen skal tykne litt og bli litt klissete, men ikke brent. Kjøttet er ferdig når det løsner fra beina.
7. Skrell potetetene og del dem i biter om de er store. Kok dem helt møre i usaltet vann. Hell av kokevannet og la potetene dampe seg tørre.
8. Mos potetene og rør inn smør. Spe med litt melk av gangen til mosen har en lett og luftig konsistens. Smak til med salt og pepper.
9. Fjern de groveste stilkene og forvell grønnkålbladene i kokende vann i ca 2 minutter. Avkjøl bladene i kaldt vann og klem ut så mye vann som mulig. Klem grønnkålen sammen til en klump og bruk en skarp kniv til å kutte hakke den.
10. Bland den hakkede grønnkålen inn i potetmosen og la alt bli gjennomvarmt.
11. Smelt smøret på middels høy varme og la det bli gyllenbrunt og duftende. Hakk nøttene grovt og bland dem i smøret.
12. Fordel colcannon på tallerkener og plasser en lammeskank oppå. Hell litt saus rundt og litt av nøttesmøret over skanken og server med én gang.
`
    },
  

    "Kyllinggryte med sitron og oliven" : {
      "Ingredients" : {
        "g kylling overlår" : 200,
        "ss olivenolje" : 1,
        "stk sitron" : 0.25,
        "stk hvitløksbåt" : 3,
        "ss frisk timian" : 0.5,
        "g grønne oliven" : 50,
        "stk sjalottløk" : 0.5,
      },
      "Recipe" : `Kyllinggryte med sitron og oliven oppskrift
1. Brun kyllingstykkene i en romslig gryte med olje.
2. Skjær sitron i tynne skiver og legg rundt kyllingstykkene. Finhakk sjalottløk og del hvitløk i to, og ha i gryta. Dryss over oliven og timian. Krydre med salt og pepper.
3. Sett formen midt i ovnen på 200 °C i 30-35 minutter, til kyllinglårene er gjennomstekt.

Server med godt, ferskt brød eller rundstykker til å dyppe i den deilige kraften og gjerne en frisk grønn salat.
`
    },

   
    "Kremet blåskjellsuppe" : {
      "Ingredients" : {
        "kg blåskjell" : 0.5,
        "stk sjalottløk" : 1,
        "stk hvitløksbåt" : 0.5,
        "g persillerot" : 25,
        "g fennikel" : 37.5,
        "stk grønn chili" : 0.25,
        "ss smør" : 0.5,
        "stilk frisk timian" : 0.5,
        "dl hvitvin" : 0.75,
        "dl fløte" : 0.75,
        "ss maisenna" : 0.5,
        "ss hakket frisk persille" : 1,
      },
      "Recipe" : `Kremet blåskjellsuppe oppskrift
  
  1. Skyll skjellene godt i kaldt vann. Fjern ødelagte skjell og skjell som ikke lukker seg når du slår dem lett mot underlaget. Fjern byssustråden ("skjegget" som fortsatt sitter på noen av skjellene). Om du bruker oppdrettsskjell er de nå klare til bruk. Om du sanker blåskjell selv, så bruk en skarp kniv og skrap vekk alger, skjell og andre ting som vokser på skjellene. 
  2. Finhakk sjalottløk, hvitløk, persillerot fennikel og chili.
  3. Smelt smøret i en stor kjele og fres de hakkede grønnsakene i 3-4 minutter til de er myke og blanke. Tilsett timian og blåskjell, og hell i hvitvin.
  4. Sett på lokk og damp blåskjellene i 5-6 minutter, eller til alle har åpnet seg godt. 
  5. Rens de fleste blåskjellene. Ta vare på noen av dem til pynt. 
  6. Sett kjelen tilbake på varmen og tilsett fløte. Rør ut maisenna i litt kaldt vann og rør det inn i suppa. Kok opp på nytt. Smak til med salt og pepper.
  7. Fordel blåskjell i dype tallerkener og hell over kokende suppe. Pynt med hele blåskjell og dryss over hakket persille. 
  
  Server med ferskt, godt brød.`
    },
 

*/
