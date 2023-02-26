import * as React from "react";
import {
  PlasmicGenerateSelector,
  DefaultGenerateSelectorProps
} from "./plasmic/d_d_npc_generator/PlasmicGenerateSelector";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import {useState} from "react";
import {MenuItem, Select, SelectChangeEvent, Slider} from "@mui/material";
import { Tooltip } from 'react-tooltip'
import {GenerateInput} from "../services/format_data";
import { JOBS, JOB_TYPES } from "../models/job_weights";


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

    const getSelectionsByArray = (choices: string[]) => {
        return [<MenuItem value={"Random"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Random</MenuItem>, ...choices.map(c => <MenuItem value={c} style={{fontFamily: 'Inter', fontSize: '18px'}}>{c}</MenuItem>)]
    }

    const getSelections = (...choices: string[]) => {
        return [<MenuItem value={"Random"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Random</MenuItem>, ...choices.map(c => <MenuItem value={c} style={{fontFamily: 'Inter', fontSize: '18px'}}>{c}</MenuItem>)]
    }

    const getJobs = () => {
        return [<MenuItem value={"Random"} style={{fontFamily: 'Inter', fontSize: '18px'}}>Random</MenuItem>, ...Object.keys(JOBS).filter(job => Number.isNaN(parseInt(job))).map(job => <MenuItem value={job} style={{fontFamily: 'Inter', fontSize: '18px'}}>{job}</MenuItem>)]
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
                                          console.log({
                                              diversity: diversity/100,
                                              economics,
                                              alignments,
                                              primaryRace,
                                              genderRatio: genderRatio/100,
                                              plotHookPercentage: plotHookPercentage/100,
                                              count
                                          })
                                      } else {
                                          let jobType = JOB_TYPES[economics];
                                          if (jobType === undefined) {
                                            const jobTypeKeys = Object.keys(JOB_TYPES);
                                            const randomIndex = Math.floor(Math.random() * (jobTypeKeys.length + 1));
                                            jobType = JOB_TYPES[randomIndex]
                                          }

                                          const input: GenerateInput = {
                                              genderVal,
                                              raceVal,
                                              alignmentVal,
                                              abilityScoreVal,
                                              jobVal,
                                              plot,
                                              jobType
                                          }
                                          props.generateButtonClick({input, tavern: false})
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
                                           onChange={e => setEconomics(e.target.value)}
                                           style={{width: '100%', fontFamily: 'Inter', color: '#ffffff', borderRadius: '6px', fontSize: '20px'}}
                                           inputProps={{
                                               inputProps: {
                                                   style: {borderColor: '#dbdbd7'}
                                               }
                                           }}
                                       >
                                           {getSelectionsByArray(Object.keys(JOB_TYPES).map(jobType => JOB_TYPES[jobType].displayName))}
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
                               overallTooltip={{
                                   className: 'tavernInfo'
                               }}
                              {...rest} />
      <Tooltip anchorSelect=".abilityScoreInfo" place="right">
          <p><b>NPC Array:</b> Distributes 13, 12, 11, 10, 9, 8 randomly between the 6 stats.</p>
          <p><b>Heroic Array:</b> Distributes 15, 14, 13, 12, 10, 8 randomly between the 6 stats.</p>
      </Tooltip>
      <Tooltip anchorSelect=".tavernInfo" place="right">
          <p>This generator is suitable for creating taverns, towns, and other kinds of crowds!</p>
          <p>The options on this page are statistical; the generated NPCs may not match exactly to the set values.</p>
          <p>NPCs generated are 85% NPC array stats, and 15% heroic array stats.</p>
      </Tooltip>
      <Tooltip anchorSelect=".diversityInfo" place="right">
          <p>Sets the percentage of resulting NPCs which are not the primary race.</p>
      </Tooltip>
      <Tooltip anchorSelect=".economicsInfo" place="right">
          <p>Sets the job distribution of the resulting NPCs.</p>
          <p><b>Random:</b> Jobs will be selected at random from all available jobs, each equally likely.</p>
          <p><b>Rural:</b> Represents a small medieval village. Most resulting NPCs perform subsistence farming, and few NPCs possess means.</p>
          <p><b>Standard:</b> </p>
      </Tooltip>
      <Tooltip anchorSelect=".alignmentInfo" place="right">
          <p>Sets the alignment distribution of the resulting NPCs.</p>
          <p><b>Random:</b> All alignments are equally likely to appear.</p>
          <p><b>Standard:</b> Standard for a normal medieval society. Individuals are on balance more lawful and more good than not.</p>
          <p><b>Underworld Standard: </b> Standard for drow and other evil societies/groups. Individuals are on balance more chaotic and more evil than not.</p>
          <p><b>Other: </b>All alignments that include this alignment are equally likely to appear.</p>
      </Tooltip>
  </>;
}

const GenerateSelector = React.forwardRef(GenerateSelector_);
export default GenerateSelector;
