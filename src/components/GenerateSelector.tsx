import * as React from "react";
import {
  PlasmicGenerateSelector,
  DefaultGenerateSelectorProps
} from "./plasmic/d_d_npc_generator/PlasmicGenerateSelector";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {useState} from "react";
import {MenuItem, Select, SelectChangeEvent, Slider} from "@mui/material";
import {JOBS} from "../services/job_generator";
import { Tooltip } from 'react-tooltip'
import {GenerateInput} from "../services/format_data";
import {RACE} from "../models/npc";


export interface GenerateSelectorProps extends DefaultGenerateSelectorProps {
  generateButtonClick: (data: any) => void;
}

function GenerateSelector_(props: GenerateSelectorProps, ref: HTMLElementRefOf<"div">) {
    const rest = props as DefaultGenerateSelectorProps;
    const [tavern, setTavern] = useState(false);
    const [genderVal, setGenderVal] = useState("Random");
    const [raceVal, setRaceVal] = useState("Random");
    const [alignmentVal, setAlignmentVal] = useState("Random");
    const [abilityScoreVal, setAbilityVal] = useState("NPC Array");
    const [jobVal, setJobVal] = useState("Random");
    const [plot, setPlot] = useState(false);
    const [genderRatio, setGenderRatio] = useState(50);
    const [primaryRace, setPrimaryRace] = useState("Random");
    const [diversity, setDiversity] = useState(25)
    const [economics, setEconomics] = useState("Random")
    const [alignments, setAlignments] = useState("Random")
    const [plotHookPercentage, setPlotHookPercentage] = useState(0)
    const [count, setCount] = useState(10)


    const handleChange = (event: SelectChangeEvent, handler: React.Dispatch<React.SetStateAction<string>>) => {
        handler(event.target.value)
    }

    const getSelections = (...choices: string[]) => {
        return [<MenuItem value={"Random"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Random</MenuItem>, ...choices.map(c => <MenuItem value={c} style={{fontFamily: 'Inter', fontSize: '18px'}}>{c}</MenuItem>)]
    }

    const getJobs = () => {
        return [<MenuItem value={"Random"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Random</MenuItem>, ...JOBS.map(c => <MenuItem value={c.name} style={{fontFamily: 'Inter', fontSize: '18px'}}>{c.name}</MenuItem>)]
    }

  return <>
      <PlasmicGenerateSelector root={{ ref }}
                              tavern={tavern}
                              swapView={{
                                props: {
                                  style: {cursor: "pointer"},
                                  onClick: () => setTavern(!tavern),
                                }
                              }}
                              generate={{
                                props: {
                                  onClick: () => {
                                      if (tavern) {
                                          //TODO
                                      } else {
                                          const input: GenerateInput = {
                                              genderVal,
                                              raceVal,
                                              alignmentVal,
                                              abilityScoreVal,
                                              jobVal,
                                              plot
                                          }
                                          props.generateButtonClick(input)
                                      }
                                  }
                                }
                              }}
                              genderSelect={{
                                  render: () => (
                                      <Select
                                          labelId={"genderSelect"}
                                          id={"genderSelect"}
                                          value={genderVal}
                                          onChange={e => handleChange(e, setGenderVal)}
                                          style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                          inputProps={{
                                              inputProps: {
                                                  style: {borderColor: '#dbdbd7'}
                                              }
                                          }}
                                      >
                                          {getSelections("Male", "Female")}
                                      </Select>
                                  )
                              }}
                              raceSelect={{
                                  render: () => (
                                      <Select
                                          labelId={"raceSelect"}
                                          id={"raceSelect"}
                                          value={raceVal}
                                          onChange={e => handleChange(e, setRaceVal)}
                                          style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                          inputProps={{
                                              inputProps: {
                                                  style: {borderColor: '#dbdbd7'}
                                              }
                                          }}
                                      >
                                          {getSelections("Human", "Half Elf", "Elf", "Dwarf", "Half Orc", "Halfling", "Gnome", "Goblin", "Dragonborn")}
                                      </Select>
                                  )
                              }}
                              alignmentSelect={{
                                  render: () => (
                                      <Select
                                          labelId={"alignmentSelect"}
                                          id={"alignmentSelect"}
                                          value={alignmentVal}
                                          onChange={e => handleChange(e, setAlignmentVal)}
                                          style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                          inputProps={{
                                              inputProps: {
                                                  style: {borderColor: '#dbdbd7'}
                                              }
                                          }}
                                      >
                                          {getSelections("Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil")}
                                      </Select>
                                  )
                              }}
                              abilityScoreSelect={{
                                  render: () => (
                                      <Select
                                          labelId={"abilityScoreSelect"}
                                          id={"abilityScoreSelect"}
                                          value={abilityScoreVal}
                                          onChange={e => handleChange(e, setAbilityVal)}
                                          style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                          inputProps={{
                                              inputProps: {
                                                  style: {borderColor: '#dbdbd7'}
                                              }
                                          }}
                                      >
                                          <MenuItem value={"NPC Array"} style={{fontFamily: 'Inter', fontSize: '18px'}}>NPC Array</MenuItem>
                                          <MenuItem value={"Heroic Array"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Heroic Array</MenuItem>
                                          <MenuItem value={"4D6"} style={{fontFamily: 'Inter', fontSize: '18px'}}>4D6 Drop 1</MenuItem>
                                      </Select>
                                  )
                              }}
                              jobSelect={{
                                  render: () => (
                                      <Select
                                          labelId={"jobSelect"}
                                          id={"jobSelect"}
                                          value={jobVal}
                                          onChange={e => handleChange(e, setJobVal)}
                                          style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                          inputProps={{
                                              inputProps: {
                                                  style: {borderColor: '#dbdbd7'}
                                              }
                                          }}
                                      >
                                          {getJobs()}
                                      </Select>
                                  )
                              }}
                              plotHookCheck={{
                                  isChecked: plot,
                                  onChange: (checked) => setPlot(checked)
                              }}
                              abilityScoreTooltip={{
                                  className:"abilityScoreInfo"
                              }}
                              genderSlider={{
                                  render: () => <Slider value={genderRatio}
                                                        onChange={(e, n) => setGenderRatio(n as number)}
                                                        step={1}
                                                        min={0}
                                                        max={100}
                                                        aria-label={"Gender Ratio"}
                                                        valueLabelDisplay="auto"
                                  />
                              }}
                               primaryRaceSelect={{
                                   render: () => (
                                       <Select
                                           labelId={"primaryRaceSelect"}
                                           id={"primaryRaceSelect"}
                                           value={primaryRace}
                                           onChange={e => handleChange(e, setPrimaryRace)}
                                           style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                           inputProps={{
                                               inputProps: {
                                                   style: {borderColor: '#dbdbd7'}
                                               }
                                           }}
                                       >
                                           {getSelections("Human", "Half Elf", "Elf", "Dwarf", "Half Orc", "Halfling", "Gnome", "Goblin", "Dragonborn")}
                                       </Select>
                                   )
                               }}
                               diversitySlider={{
                                   render: () => <Slider value={diversity}
                                                         onChange={(e, n) => setDiversity(n as number)}
                                                         step={1}
                                                         min={0}
                                                         max={100}
                                                         aria-label={"Diversity Ratio"}
                                                         valueLabelDisplay="auto"
                                   />
                               }}
                               economicsSelect={{
                                   render: () => (
                                       <Select
                                           labelId={"economicsSelect"}
                                           id={"economicsSelect"}
                                           value={economics}
                                           onChange={e => handleChange(e, setEconomics)}
                                           style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                           inputProps={{
                                               inputProps: {
                                                   style: {borderColor: '#dbdbd7'}
                                               }
                                           }}
                                       >
                                           {getSelections("Upper Class", "Middle Class", "Lower Class", "Rural Lower Class", "Rural Upper Class", "Rural Mixed", "Urban Lower Class", "Urban Middle Class", "Urban Upper Class", "Urban Mixed", "Religious", "Wartime", "Shady")}
                                       </Select>
                                   )
                               }}
                               alignmentDistributionSelect={{
                                   render: () => (
                                       <Select
                                           labelId={"alignmentsSelect"}
                                           id={"alignmentsSelect"}
                                           value={alignments}
                                           onChange={e => handleChange(e, setAlignments)}
                                           style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                           inputProps={{
                                               inputProps: {
                                                   style: {borderColor: '#dbdbd7'}
                                               }
                                           }}
                                       >
                                           {getSelections("Standard", "Underworld Standard", "Lawful", "Good", "Neutral", "Chaotic", "Evil")}
                                       </Select>
                                   )
                               }}
                               plotHookPercentage={{
                                   type: "number",
                                   value: plotHookPercentage,
                                   onChange: (e) => setPlotHookPercentage(Math.min(Math.max(parseInt(e.target.value), 0), 100))
                               }}
                               totalCount={{
                                   type: "number",
                                   value: count,
                                   onChange: (e) => setCount(Math.min(Math.max(parseInt(e.target.value), 1), 100))
                               }}
                               diversityTooltip={{
                                   className: "diversityInfo"
                               }}
                               economicsTooltip={{
                                   className: "economicsInfo"
                               }}
                               alignmentTooltip={{
                                   className: "alignmentInfo"
                               }}
                              {...rest} />
      <Tooltip anchorSelect=".abilityScoreInfo" place="right">
          <p><b>NPC Array:</b> Distributes 13, 12, 11, 10, 9, 8 randomly between the 6 stats.</p>
          <p><b>Heroic Array:</b> Distributes 15, 14, 13, 12, 10, 8 randomly between the 6 stats.</p>
      </Tooltip>
  </>;
}

const GenerateSelector = React.forwardRef(GenerateSelector_);
export default GenerateSelector;
