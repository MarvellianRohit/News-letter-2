import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class NewsScreen extends React.Component {
  render(){
    return(
      <View>
        <Text style={{color : 'black', fontSize : 35, fontStyle : 'Times New Roman', marginTop : 25, fontWeight : 'bold', backgroundColor : 'orange', textAlign : 'center'}}>Top News</Text>
        <Text style={{color : 'black', fontSize : 25, fontStyle : 'Times New Roman', marginTop : 20, fontWeight : 'bold'}}>Donald Trump threatens to fire top US disease expert in rift over coronavirus</Text>
        <Text style={{color : 'black', fontSize : 15, fontStyle : 'Times New Roman', marginTop : 20, fontWeight : 'bold'}}>OPA-LOCKA, Florida: President Donald Trump is suggesting that he will fire Dr. Anthony Fauci after Tuesday’s election, as his rift with the nation’s top infectious disease expert widens while the nation sees its most alarming outbreak of the coronavirus since the spring.
Speaking at a campaign rally in Opa-locka, Florida, Trump expressed frustration that the surging cases of the virus that has killed more than 230,000 Americans so far this year remains prominent in the news, sparking chants of “Fire Fauci” from his supporters.
“Don’t tell anybody but let me wait until a little bit after the election,” Trump replied to thousands of supporters just after midnight Monday, adding he appreciated their “advice.”
Trump’s comments on Fauci less than 48 hours before polls close all but assure that his handling of the pandemic will remain front and center heading into Election Day.
It’s the most direct Trump has been in suggesting he was serious about trying to remove Fauci from his position. He has previously expressed that he was concerned about the political blowback of removing the popular and respected doctor before Election Day.
Trump’s comments come after Fauci leveled his sharpest criticism yet of the White House’s response to the coronavirus and Trump’s public assertion that the nation is “rounding the turn” on the virus.
Fauci has grown outspoken that Trump has ignored his advice for containing the virus, saying he hasn’t spoken with Trump in more than a month. He has raised alarm that the nation was heading for a challenging winter if more isn’t done soon to slow the spread of the disease.
In an interview with the Washington Post this weekend, Fauci cautioned that the US will have to deal with “a whole lot of hurt” in the weeks ahead due to surging coronavirus cases.
Fauci said the US “could not possibly be positioned more poorly” to stem rising cases as more people gather indoors during the colder fall and winter months. He says the US will need to make an “abrupt change” in public health precautions.
Fauci added that he believed Democratic presidential candidate Joe Biden “is taking it seriously from a public health perspective,” while Trump is “looking at it from a different perspective.” Fauci, who’s on the White House coronavirus task force, said that perspective emphasizes “the economy and reopening the country.”
In response, White House spokesman Judd Deere said Trump always puts people’s well-being first and Deere charges that Fauci has decided “to play politics” right before Tuesday’s election. Deere said Fauci “has a duty to express concerns or push for a change in strategy” but instead is “choosing to criticize the president in the media and make his political leanings known.”
Trump in recent days has stepped up his attacks on Biden for pledging to heed the advice of scientists in responding to the pandemic. Trump has claimed Biden would “lock down” the nation once again. Biden has promised to heed the warnings of Fauci and other medical professionals but has not endorsed another national lockdown.
Trump has recently relied on the advice of Stanford doctor Scott Atlas, who has no prior background in infectious diseases or public health, as his lead science adviser on the pandemic. Atlas has been a public skeptic about mask wearing and other measures widely accepted by the scientific community to slow the spread of the virus.
Other members of the White House coronavirus task force have grown increasingly vocal about what they see as a dangerous fall spike in the virus.</Text>
        </View>
    )
  }
}