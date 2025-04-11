import { Person } from "@/data/models/Person";


const images = import.meta.glob("@/assets/images/people/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Helper: extract image path by filename
const getImage = (filename: string): string => {
  const match = Object.entries(images).find(([path]) => path.endsWith(`/${filename}`));
  return match?.[1] || "";
};

const people: Person[] = [
  {
    name: "Nonkululeko Gabriella Luenza Ndaba",
    image: getImage("1.jpg"),
    story:
      "Nonkululeko Gabriella Luenza Ndaba 'Gaby', 32, was found lifeless under the N17 bridge near Van Dyk Park on 1 June 2023. She had been missing since 26 May while on her daily walk.\n\nAn inquest docket has been opened.\n\n#UnburyTheTruth",
  },
  {
    name: "Chesnay Patricia Keppler",
    image: getImage("2.jpg"),
    story:
      "Chesnay Patricia Keppler, 22, was shot and killed, allegedly by her boyfriend, in Eldorado Park, Johannesburg, on Christmas Day, 25 December 2024. Chesnay worked as a Crime Prevention Warden.\n\nHer boyfriend, a police officer, reportedly tried to force her into a vehicle, but her friends intervened, allowing her to escape into the house. He then retrieved his firearm from his police vehicle and fired multiple shots through the kitchen window, hitting Chesnay.\n\nShe was rushed to hospital but was declared dead on arrival. The suspect fled the scene but was later arrested. It is alleged that he had been abusive before this incident.\n\n#UnburyTheTruth",
  },
  {
    name: "Zakithi Zasemhlungwini Ndaba",
    image: getImage("3.jpg"),
    story:
      "Zakithi Zasemhlungwini Ndaba, 27, was tragically shot and killed by her boyfriend in her apartment in Sunninghill, Johannesburg, on 7 March 2025.\n\nIt is alleged that security staff from the apartment complex discovered Zakithi’s lifeless body the following day after her family could not reach her. The boyfriend fled the scene. Zakithi leaves behind a child and a grieving family.\n\n#UnburyTheTruth",
  },
  {
    name: "Leigh Matthews",
    image: getImage("4.jpg"),
    story:
      "Leigh Matthews, 21, was kidnapped and murdered in July 2004 by Donovan Moodley, 24.\n\nShe was abducted from Bond University in Sandton, Johannesburg, on 9 July 2004. A ransom demand was made, but her body was found on 21 July 2004, shot four times.\n\nDonovan Moodley was arrested on 4 October 2004, charged with murder, kidnapping, and extortion. He pleaded guilty and was sentenced to life imprisonment for murder, 15 years for kidnapping, and 10 years for extortion.\n\nMoodley was denied parole in January 2022, but this decision was set aside by the Gauteng High Court. \n\n#UnburyTheTruth",
  },
  {
    name: "Hlengiwe Msimango",
    image: getImage("5.jpg"),
    story:
      "Hlengiwe Msimango, a mother of two from Kempton Park, Gauteng, was shot dead by her partner on 3 August 2020.\n\nHe claimed he was awoken by people in his yard and, armed with his gun, went outside to check. On returning to the house, he saw a shadow in their bedroom and fired twice, hitting Hlengiwe.\n\n#UnburyTheTruth",
  },
  {
    name: "Ntokozo Mayenzi Xaba",
    image: getImage("6.jpg"),
    story:
      "Ntokozo Mayenzi Xaba, 20, was allegedly stabbed to death by her ex-boyfriend on 2 February 2023 in her student residence at Ekhaya Junction, Pretoria.\n\nHer friends contacted the accommodation after she failed to answer her phone. Ntokozo was found in her apartment and declared dead by paramedics. The suspect has been arrested. \n\n#UnburyTheTruth",
  },
  {
    name: "Hillary Gardee",
    image: getImage("7.jpg"),
    story:
      "Hillary Gardee, 28, was found dead on 3 May 2022, abandoned on the roadside outside Nelspruit, Mpumalanga—about 40 kilometres from the city.\n\nPassers-by discovered her body, which had bruises on the head. She was still wearing the same clothes she had on when she disappeared. Police are investigating her murder.\n\nHillary went missing on 29 April 2022 after being last seen at a shopping centre in Nelspruit. A three-year-old child was with her at the time but was later found safe that same day. \n\n#UnburyTheTruth",
  },
  {
    name: "Sasha Lee Monique Shah",
    image: getImage("8.jpg"),
    story:
      "Sasha Lee Monique Shah, 25, was tragically killed in a parking lot at the Gateway shopping centre in Durban on 30 October 2022. It is alleged that her ex-boyfriend shot and killed her before turning the gun on himself.\n\n#UnburyTheTruth",
  },
  {
    name: "Uyinene Mrwetyana",
    image: getImage("9.jpg"),
    story:
      "Uyinene Mrwetyana, 19, a University of Cape Town (UCT) student, was brutally raped and murdered in 2019 by Luyanda Botha, a post office employee. \n\nHer death left an indelible mark on the hearts and minds of South Africans. \n\nBotha was sentenced to life imprisonment for her murder, two life sentences on two counts of rape, and five years for defeating the course of justice, after he confessed to the crime.\n\n#UnburyTheTruth",
  },
  {
    name: "Reeva Steenkamp",
    image: getImage("10.jpg"),
    story:
      "Reeva Steenkamp, 29, was a model and a passionate advocate against gender-based violence. Just days before her tragic death, she had planned to speak to young girls at her former school about this very issue.\n\nOn Valentine’s Day 2013, Reeva was shot and killed by her boyfriend, Oscar Pistorius, who fired four shots through a locked bathroom door while she was allegedly hiding inside. This horrific act was the culmination of a history of controlling behaviour, as revealed in text messages where Reeva expressed fear of his temper and abusive tendencies.\n\n#UnburyTheTruth",
  },
  // {
  //   name: "Karen",
  //   image: getImage("11.jpg"),
  //   story:
  //     "Karen is a gardener who grows the most beautiful flowers. Her garden is a kaleidoscope of colors, with roses, tulips, and daisies blooming year-round. She often shares her gardening tips with her neighbors.",
  // },
  {
    name: "Tshegofatso Pule",
    image: getImage("12.jpg"),
    story:
      "Tshegofatso Pule, 28, was found shot in the chest and hanging from a tree in Durban Deep, Roodepoort, in June 2020. At the time, she was eight months pregnant.\n\nAfter an investigation, it was revealed that her boyfriend, Ntuthuko Shoba, was responsible for her murder, having hired a hitman to kill her.\n\n#UnburyTheTruth",
  },
  {
    name: "Franziska Blöchliger",
    image: getImage("13.jpg"),
    story:
      "Franziska Blöchliger, 16, was raped and killed in the Tokai Forest, Cape Town on 7 March 2016, when she went for a run. She was also robbed of her cell phone, diamond ring, and earphones.\n\nHer body was found by police and Crime Watch just hours after she had been reported missing. \n\n#UnburyTheTruth",
  },
  {
    name: "Naeema Marshall",
    image: getImage("14.jpg"),
    story:
      "Naeema Marshall, 14, from Beacon Valley in Mitchells Plain, was gunned down in her aunt's house in Eerste River on 17 July 2023 by a 15-year-old boy known to her.\n\nIt is alleged that Naeema was shot in the head in a fit of rage after rejecting the boy's advances. The suspect fled the scene, and no one has been arrested yet.\n\nWestern Cape police confirmed a case of murder is being investigated.\n\n#UnburyTheTruth",
  },
  {
    name: "Hannah Cornelius",
    image: getImage("15.jpg"),
    story:
      "Hannah Cornelius, 21, a Stellenbosch student, was carjacked by four men in May 2017 while dropping off fellow student Cheslin Marsh at his home. The men attacked Cheslin, robbing and assaulting him before leaving him for dead.\n\nThey then brutally raped Hannah, stabbed her in the neck, and crushed her skull with a rock.\n\nGeraldo Parsons, 27, Vernon Witbooi, 33, and Eben van Niekerk, 28, were found guilty of her gang rape and murder. Nashville Julius, 29, was convicted of kidnapping and robbing both Hannah and Cheslin.\n\n#UnburyTheTruth",
  },
  {
    name: "Nokwanda Maguga-Patocka",
    image: getImage("16.jpg"),
    story:
      "Nokwanda Maguga-Patocka, 44, died from head injuries after being strangled, punched, and bludgeoned with an object by a 49-year-old man she allegedly knew on 4 October 2021.\n\nThe incident occurred in Ginsberg, Qonce, and her body was found by police in nearby bushes.\n\nWitnesses reported seeing the man carrying her to the bushes, where she was killed. Her head showed clear signs of trauma.\n\n#UnburyTheTruth",
  },
  {
    name: "Thembekile Charlotte Letlape",
    image: getImage("17.jpg"),
    story:
      "Thembekile Charlotte Letlape, 38, was tragically murdered, allegedly by her boyfriend, in Fourways, Johannesburg, on 30 May 2024. Her lifeless body was found at her boyfriend's home.\n\nThe boyfriend fled the scene but handed himself over to the police on 1 June 2024. Police have arrested two other individuals in connection with the case, who have been charged with defeating the ends of justice.\n\n#UnburyTheTruth",
  },
  {
    name: "Delana Cader Rawlins",
    image: getImage("18.jpg"),
    story:
      "Delana Cader Rawlins, 41, was allegedly murdered by her estranged husband, 45, in Umgungundlovu, KZN, on 13 May 2023.\n\nAfter an argument at a work function, Delana’s brother-in-law drove her home. The suspect followed them, stopped their vehicle, and fired more than ten shots at Delana as she sat in the passenger seat. She died at the scene, leaving behind three children.\n\nThe suspect fled but handed himself over on 15 May 2023.\n\n#UnburyTheTruth",
  },
  {
    name: "Luyanda Cele",
    image: getImage("19.jpg"),
    story:
      "Luyanda Cele, 24, was found murdered in South Beach, Durban, on 20 March 2023.\n\nShe went missing three days prior, last seen in Durban CBD on 17 March. Luyanda, an occupational health and safety intern at the municipality, had told her sister she would be home late after going out for drinks, though the details of who she was with remain unknown.\n\nNo arrests have been made, and the motive for her killing is unclear.\n\n#UnburyTheTruth",
  },
  {
    name: "Mahlako Malebo Rabalao",
    image: getImage("20.jpg"),
    story:
      "Mahlako Malebo Rabalao, 27, was found dead in her burned-out car on 16 March 2023.\n\nShe went missing on 7 March 2023.\n\nNo arrests have been made in connection with her murder.\n\n#UnburyTheTruth",
  },
  {
    name: "Kirsten Kluyts",
    image: getImage("21.jpg"),
    story:
      "Kirsten Kluyts, 34, was found dead at the side of a running path in George Lea Park, Sandton, on 29 October 2023.\n\nIt is alleged that Kirsten participated in an organised run with her running club that morning but did not log in after the run was completed.\n\nA passerby later discovered her lifeless body along the route. Police are investigating the circumstances of her death and have opened a murder case. \n\n#UnburyTheTruth\n\n",
  },
  {
    name: "Tania Msane Zungu",
    image: getImage("22.jpg"),
    story:
      "Tania Msane Zungu, 36, was tragically shot to death by her husband in their home in Pinetown, KwaZulu-Natal, on 3 January 2023. It is alleged that the couple had a domestic dispute before the suspect shot Tania multiple times. The suspect fled, and Tania died at the scene. She leaves behind her children.\n\n#UnburyTheTruth",
  },
  {
    name: "Thimna Kuze",
    image: getImage("23.jpg"),
    story:
      "Thimna Kuze, 13, was raped and killed in Khayelitsha on 25 March 2023. It is alleged that Thimna went to a sleepover at a friend's house, where the friend’s uncle offered the girls alcohol, making them vulnerable to being allegedly raped once they passed out.\n\n#UnburyTheTruth",
  },
  {
    name: "Jabulile Hope Mhluzi",
    image: getImage("24.jpg"),
    story:
      "Jabulile Hope Mhluzi, 18, was stabbed to death in Fleurhof, Johannesburg, on 3 July 2023.\n\nIt is alleged that Jabulile and her friends got into an argument with a group, leading to a fight. Both Jabulile and her friend were stabbed during the altercation.\n\nA friend at the scene took both girls to the hospital, but Jabulile died from her injuries. Police are investigating the murder.\n\nBoth girls were in their matric year.\n\n#UnburyTheTruth",
  },
  {
    name: "Marolien Schmidt",
    image: getImage("25.jpg"),
    story:
      "Marolien Schmidt, 40, was stabbed to death in her home in Richmond Hill, Gqeberha, on 9 August 2023—Women’s Day.\n\nNeighbours reportedly heard her screaming and glass breaking at around 1:40 am. She was found with stab wounds and rushed to hospital but succumbed to her injuries.\n\nPolice determined that the attacker entered the property by breaking a side window. The suspect fled the scene. \n\nMarolien was a well-known physiotherapist and triathlon athlete in Gqeberha. \n\n#UnburyTheTruth",
  },
  {
    name: "Abongile Matina",
    image: getImage("26.jpg"),
    story:
      "Abongile Matina, 27, was beaten to death with a golf club by her boyfriend in Dimbaza, Eastern Cape, on 26 December 2024.\n\nShe was rushed to hospital but succumbed to her injuries. No arrests have been made. Abongile leaves behind her six-year-old child.\n\n#UnburyTheTruth",
  },
  {
    name: "Bongeka Makhathini",
    image: getImage("27.jpg"),
    story:
      "Bongeka Makhathini, 21, and her three-year-old son, Okuhle, were brutally stabbed to death by her boyfriend, Mlondi Cele, 24, in Danganya, uMgababa, Durban, on 20 December 2024.\n\nBongeka was found in the bedroom with her throat slit, while Okuhle’s body was discovered just metres away. Mlondi was later found hanging from the roof of the same house.\n\nEx-police minister Bheki Cele confirmed the murders, revealing that his nephew had sent a voice note to a relative before taking his own life. Bongeka’s family stated that they were unaware of any history of violence.\n\nIt is alleged that the house where the murders took place had belonged to Mlondi’s father, who was also murdered there three years ago.\n\n#UnburyTheTruth",
  },
  {
    name: "Ntobeko MaNdosi Cele",
    image: getImage("28.jpg"),
    story:
      "Ntobeko MaNdosi Cele, 25, was brutally stabbed to death by her ex-boyfriend, Sbusiso Lawrence, in the Malangeni area of Umzinto, KwaZulu-Natal, on 17 December 2024.\n\nSbusiso confessed to the murder on Facebook, posting videos and images of her lifeless body. He was found dead the next day, 18 December 2024, not far from where he had killed Ntobeko. The primary school teacher allegedly took his own life. \n\n#UnburyTheTruth",
  },
  {
    name: "Nomsa Jass",
    image: getImage("29.jpg"),
    story:
      "Nomsa Jass, 26, was found dead in the bushes along the R501 near Carletonville on 8 September 2024. She was last seen leaving her workplace at Mooirivier Mall on 25 August 2024.\n\nHer vehicle was found abandoned in Springs shortly after her disappearance.\n\nA joint operation led to the arrest of the suspect, who has been charged with kidnapping, robbery, and murder. \n\n#UnburyTheTruth",
  },
  {
    name: "Melanie Stoffels",
    image: getImage("30.jpg"),
    story:
      "Melanie Stoffels, 26, was brutally murdered in Gugulethu, Cape Town, on 7 August 2024.\n\nIt is alleged that an unknown man attacked Melanie with a hammer before throwing her lifeless body over a bridge. The crime is believed to have been orchestrated by her ex-girlfriend, who is currently missing, and police have been unable to locate her.\n\nThe suspect has been arrested.\n\n#UnburyTheTruth",
  },
  {
    name: "Nqobile Hlophe",
    image: getImage("31.jpg"),
    story:
      "Nqobile Hlophe, 13, was found lifeless under a bridge near the N3 freeway. She was last seen boarding a taxi from Pinetown Girls High School on 19 July 2024.\n\nIt is alleged that Nqobile was involved in a hit-and-run, with her body severely injured from being run over by multiple vehicles. Police are still investigating the circumstances surrounding her disappearance.\n\n#UnburyTheTruth",
  },
  {
    name: "Deveney Nel",
    image: getImage("32.jpg"),
    story:
      "Deveney Nel, 16, was found dead in a storeroom at Overberg High School in Caledon on 7 August 2024.\n\nShe was last seen at school that day, and her family reported her missing when she failed to arrive home. A search party later discovered her body on the school premises.\n\nMedical personnel declared her deceased at the scene, and a murder case has been opened. Deveney was a Grade 10 student at Overberg High School.\n\n#UnburyTheTruth",
  },
  {
    name: 'Dorcas "Didi" Lekganyane',
    image: getImage("33.jpg"),
    story:
      'Dorcas "Didi" Lekganyane, 32, was stabbed multiple times, allegedly by her husband, in their home in Bramley, Johannesburg, on 11 July 2024.\n\nPolice responded to a domestic violence incident and found Didi with multiple stab wounds. Her husband was also at the scene, allegedly attempting to take his own life. He was taken to hospital under police guard and will be charged with murder once he is able to appear in court.\n\nDidi was an academic and an internationally respected scientist. In June 2024, she was recognised as one of the Mail & Guardian’s 200 Young South Africans in the Climate Change & Environment category for her impactful work and passion.\n\n#UnburyTheTruth',
  },
  {
    name: "Zintle Takane",
    image: getImage("34.jpg"),
    story:
      "Zintle Takane, 24, was found dead in a shallow grave in KwaMaqoma (formerly known as Fort Beaufort), Eastern Cape, on 4 June 2024, after being reported missing on 31 May 2024.\n\nIt is alleged that Zintle was last seen with her boyfriend, 34, who misled her family and friends during their search for her. The boyfriend has since been arrested in connection with her murder and is expected to appear in court.\n\n#UnburyTheTruth",
  },
  {
    name: "Machaka Radebe",
    image: getImage("35.jpg"),
    story:
      "Machaka Radebe, 16, was found dead in a field near Phase 9, Bloemfontein, on 4 December 2023.\n\nShe was last seen by her brother on 2 December 2023 at their home in Rocklands, Bloemfontein. When he noticed she was missing, he called her phone, but an unknown man allegedly answered and demanded a ransom. The brother informed their mother, and a case of kidnapping was opened with the police the same day.\n\n#UnburyTheTruth",
  },
  {
    name: "Xoliswa Radebe",
    image: getImage("36.jpg"),
    story:
      "Xoliswa Radebe, 26, was tragically murdered in her apartment in Pretoria on 3 May 2024. It is alleged that she was beaten to death, with CCTV footage revealing that her ex-boyfriend was the last person seen with her. On 7 May, her decomposed body was discovered after neighbours alerted her family to a horrific smell coming from her apartment. \n\n#UnburyTheTruth",
  },
  {
    name: "Zanele Faith Mokoena",
    image: getImage("37.jpg"),
    story:
      "Zanele Faith Mokoena, 18, was found dead in Thokoza, Ekurhuleni, on 8 May 2024, after being kidnapped the day before.\n\nIt is alleged that Zanele’s family received a disturbing image and message via WhatsApp from someone claiming to have kidnapped Zanele in Thokoza. The man demanded a large sum of money for her release, giving the family a deadline the next morning before threatening to kill Zanele. The family immediately alerted the police.\n\nZanele’s burnt body was discovered on 8 May 2024. A suspect, reportedly known to Zanele, was arrested for questioning.\n\n#UnburyTheTruth",
  },
  {
    name: "Mamohlotsi Nchabeleng",
    image: getImage("38.jpg"),
    story:
      "Mamohlotsi Rebecca Nchabeleng, 22, was murdered by her boyfriend in her student residence on 19 August 2024.\n\nIt is alleged that her boyfriend’s body was found at his home in Sharpeville, alongside a note revealing that he had killed Mamohlotsi and that her body would be found in her residence. Upon arrival, police found her lifeless body.\n\n#UnburyTheTruth",
  },
  {
    name: "Asiphe Cetywayo",
    image: getImage("39.jpg"),
    story:
      "Asiphe Cetywayo, 22, was allegedly raped and murdered in Mbekweni, Paarl, on 3 March 2024.\n\nHer body was found the next day near the Vlakkeland dumping site, burnt with acid. Witnesses reported seeing two unknown men in a white Toyota Yaris dumping her remains.\n\nA man was arrested in connection with her murder but later escaped custody and remains at large.\n\n#UnburyTheTruth",
  },
  {
    name: "Mandy Bailey",
    image: getImage("40.jpg"),
    story:
      "Mandy Bailey, 43, was allegedly killed by her ex-husband in her home in Kimberly on 27 December 2023.\n\nIt is alleged that Mandy was sitting on the bed with her 9-year-old daughter when her ex-husband, 47, entered the house and shot her twice. He fled the scene but was arrested by SAPS a few hours later. The child was unharmed.\n\n#UnburyTheTruth",
  },
  {
    name: "Melanie Jackson",
    image: getImage("41.jpg"),
    story:
      "Melanie Jackson was shot and killed by her ex-husband in Kensington, Johannesburg, on 1 May 2024.\n\nMelanie had travelled to Johannesburg for funeral arrangements after her son passed away in an accident on 29 April.\n\nDuring an argument with her ex-husband, Melanie tried to walk away, but he shot her dead in front of the family before turning the gun on himself and killing himself.\n\n#UnburyTheTruth",
  },
  {
    name: "Yolanda Bianca Khuzwayo",
    image: getImage("42.jpg"),
    story:
      "Yolanda Bianca Khuzwayo, a 29-year-old police officer, was tragically murdered by her boyfriend in her flat in Durban on 31 March 2024. Yolanda, who was reportedly pregnant at the time, was allegedly stabbed to death by her 27-year-old boyfriend, a metro police officer and colleague.\n\nDisturbingly, the suspect took videos and pictures of Yolanda in her final moments and shared them with several people and on social media. After stealing her phone, he fled the scene but was handed over to the police by his family a few hours later. He is facing charges of premeditated murder and theft.\n\n#UnburyTheTruth",
  },
  {
    name: "Ramrathee Rajcoomar",
    image: getImage("43.jpg"),
    story:
      "Ramrathee 'Devi' Rajcoomar, 77, was found strangled with her white Punjabi scarf in the bathroom of her home in Phoenix, Durban, on 18 March 2024.\n\nThe suspect, a former gardener she had employed, allegedly murdered her after she confronted him about a theft from a relative’s home. He fled with an unknown amount of money, and was seen by neighbours, who alerted her children. No arrests have been made.\n\n#UnburyTheTruth",
  },
  {
    name: "Fezeka Ndlovu",
    image: getImage("44.jpg"),
    story:
      "Fezeka Ndlovu was allegedly murdered by her boyfriend, a police officer, in her home in Palm Ridge, Ekurhuleni, in early September 2024.\n\nIt is reported that Fezeka's seven-year-old daughter witnessed the attack, during which her mother's partner allegedly stabbed her multiple times. The argument reportedly started when the officer, stationed at Katlehong SAPS, arrived at Fezeka’s home. The Independent Police Investigative Directorate (IPID) states that he attacked Fezeka in front of the child. In a panic, the little girl ran to neighbours for help, but when they attempted to intervene, the officer allegedly continued the assault, hitting Fezeka with a chair. The neighbours restrained him, and he was later handed over to the authorities.\n\nFezeka was rushed to a nearby clinic but was declared dead on arrival.\n\n#UnburyTheTruth",
  },
  {
    name: "Jessica Nombulelo Michael",
    image: getImage("45.jpg"),
    story:
      "Jessica Nombulelo Michael, 28, was found dead in Kalkfontein Dam on 11 December 2023. She was last seen on 5 December 2023, the same day she attended a gender-based violence (GBV) related court case.\n\nNombulelo was a GBV social worker at the Koffiefontein Office in the Xhariep District, Free State. She provided psychosocial support to victims of gender-based violence and worked to raise awareness in the community.\n\n#UnburyTheTruth",
  },
  {
    name: "Mamello Thamae",
    image: getImage("46.jpg"),
    story:
      "Magistrate Mamello Thamae, 40, was found by Lesotho authorities on 22 September 2023, hours after she and her husband were reported missing from their Heilbron home in the Free State.\n\nPolice confirmed that her husband, 40, was arrested after he pointed out his wife’s body in the boot of their silver vehicle, parked outside a guest house in Mokhotlong.\n\nPolice are investigating a murder case.\n\n#UnburyTheTruth",
  },
  {
    name: "Linell du Toit",
    image: getImage("47.jpg"),
    story:
      "Linell du Toit, 42, was allegedly murdered by her partner in their apartment in Vereeniging, Gauteng, on 26 October 2024.\n\nIt is reported that her partner poured petrol over Linell and set her on fire. She was rushed to the hospital but tragically succumbed to her injuries on 3 November 2024, suffering third- to fourth-degree burns over 80% of her body.\n\nHer partner, who is being treated for burns sustained in the incident, has been charged with murder.\n\n#UnburyTheTruth",
  },
  {
    name: "Ramaabele Sophy Mothapo",
    image: getImage("48.jpg"),
    story:
      "Ramaabele Sophy Mothapo, 39, was shot to death, allegedly by her boyfriend, in Lotus Garden, Pretoria West, on Christmas Eve, 24 December 2024.\n\nIt is reported that Ramaabele was shot and killed in her home. Her boyfriend has been arrested and charged with murder. Ramaabele was a dedicated constable at the Tshwane Metro Police Department, where she served for more than ten years.\n\n#UnburyTheTruth",
  },
  {
    name: "Aviwe Mqikela",
    image: getImage("49.jpg"),
    story:
      "Aviwe Mqikela, 27, was stabbed multiple times, allegedly by her boyfriend, in Motherwell, Gqeberha, on 6 November 2024.\n\nAfter the murder, he reportedly hid her body under his bed before fleeing the scene. No arrests have been made.\n\n#UnburyTheTruth",
  },
  {
    name: "Thina Masa",
    image: getImage("50.jpg"),
    story:
      "Thina Masa's lifeless and naked body was found in a ditch in Asanda Village, Strand, Cape Town, on 5 December 2024.\n\nA passerby discovered her body. It is alleged that Thina was raped before being murdered.\n\nA man was arrested and charged with rape and murder. The court denied him bail, and the case has been postponed to 20 February 2025.\n\n#UnburyTheTruth",
  },
  {
    name: "Amogelang Modiselle",
    image: getImage("51.jpg"),
    story:
      "Amogelang Modiselle, 31, was allegedly murdered by her boyfriend in Ga-Rankuwa Unit 6, Gauteng, on 20 July 2024.\n\nHe fled the scene but was arrested the following day. Amogelang leaves behind her two children.\n\n#UnburyTheTruth",
  },
  {
    name: "Phume Nhlangulela",
    image: getImage("52.jpg"),
    story:
      "Phume Nhlangulela, 31, was murdered, allegedly by her boyfriend, in Inanda Township.\n\nAfter Phume went missing, her family began searching for her, only to find her half-naked and decomposing body inside a room allegedly rented by her boyfriend at Amatikwe, Inanda, on 5 June 2024.\n\nPhume was found lying on the floor with her hands above her head, covered by a blanket. She sustained a visible head injury and is believed to have been strangled.\n\nFollowing the family's plea on social media, many people came forward, including one person who accused the suspect of murdering another woman in Durban.\n\n#UnburyTheTruth",
  },
  {
    name: "Wandile Ngcobo",
    image: getImage("53.jpg"),
    story:
      "Wandile Ngcobo, 17, was raped and murdered in her own home in Umlazi, KwaZulu-Natal, on 28 May 2024.\n\nIt is alleged that after Wandile was raped, she was stabbed multiple times. Police are investigating, and no one has been arrested yet.\n\nWandile was a Grade 11 learner at Durban Girls Secondary School.\n\n#UnburyTheTruth",
  },
  {
    name: "Nondumiso Amanda Ginindza",
    image: getImage("54.jpg"),
    story:
      "Nondumiso Amanda Ginindza, 21, was found dead in Mohlakeng on 18 May 2024. She was last seen the day before at netball practice.\n\nA suspect has been arrested in connection with her death.\n\n#UnburyTheTruth",
  },
  {
    name: "Nokubonga Nomsindisi Tobela-Mjoli",
    image: getImage("55.jpg"),
    story:
      "Nokubonga Nomsindisi Tobela-Mjoli, 89, was raped and strangled to death in Umzimkhulu, KwaZulu-Natal, on 29 March 2024.\n\nIt is alleged that her body was burned after the attack inside her home.\n\n#UnburyTheTruth",
  },
  {
    name: "Tia Ashleigh Robinson",
    image: getImage("56.jpg"),
    story:
      "Tia Ashleigh Robinson, 22, was killed after two gunmen opened fire on her vehicle in Pinetown, Durban, on 25 January 2024.\n\nIt is alleged that Tia was parking her vehicle when she was ambushed by armed suspects who opened fire and wounded her. She was rushed to the hospital in a critical condition and passed away shortly after arrival.\n\n#UnburyTheTruth",
  },
];

export default people;
