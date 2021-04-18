// Type: Fire
// Move Power: STR/DEX
// V - Move Time: 1 action
// V - PP: 15
// V - Duration: Instantaneous
// V - Range: 60ft

// V - You hurl a ball of flame at a target within range. 
// V - Make a ranged attack, doing 1d6 + Move fire damage on a successful hit. If the natural attack roll is {19} or {20}, the target is burnt.

// V - Higher Levels: The damage dice roll for this move changes to 1d12 at level 5, 2d8 at level 10, and 4d6 at level 17.

// Attack Roll: {!(1d20) + (StrMod > DexMod ? StrMod : DexMod) + Prof}
// Damage Roll: !!(1d6 + {StrMod > DexMod ? StrMod : DexMod})
// Damage Roll Lv.5: !!(1d12 + {StrMod > DexMod ? StrMod : DexMod})
// Damage Roll Lv.10: !!(2d8 + {StrMod > DexMod ? StrMod : DexMod})
// Damage Roll Lv.17: !!(4d6 + {StrMod > DexMod ? StrMod : DexMod})

// Fire type Pokémons can add their STAB to the damage: +{Stab}

import React, { useState, useMemo, useCallback } from "react";

import {
  Button as MuiButton,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField as MuiTextField,
  RadioGroup,
  Radio
} from "@material-ui/core";

import {
  Autocomplete,
} from "@material-ui/lab";

import {
  replace,
  test,
  trim,
} from "ramda";

const useFieldState = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => setValue(e.target.value), [setValue]);
  return {value, onChange};
}

const useCheckboxState = initialValue => {
  const [checked, setChecked] = useState(initialValue);
  const onChange = useCallback((e) => setChecked(e.target.checked), [setChecked]);
  return {checked, onChange};
}

const useAutocompleteState = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((_e, newValue) => setValue(newValue), [setValue]);
  return {value, onChange};
}

const useStepper = start => {
  const [value, setValue] = useState(0);
  const next = () => setValue((prevValue) => prevValue + 1);
  const prev = () => setValue((prevValue) => prevValue - 1);
  return { value, next, prev, setValue }
}

const TextField = props => <MuiTextField fullWidth style={{ marginBottom: "20px" }} variant="outlined" {...props}/>
const Button = props => <MuiButton style={{ marginBottom: "20px" }} variant="contained" color="primary" {...props}/>

function App() {
  const { value: currentStep, next, prev, setValue: setCurrentStep } = useStepper(0);

  const moveType = useAutocompleteState("Typeless");
  const movePower = [useAutocompleteState("None"), useAutocompleteState("None")];

  const moveTime = useFieldState("");
  const pp = useFieldState("");
  const duration = useFieldState("");
  const range = useFieldState("");
  const description = useFieldState("");
  const atHigherLevels = useFieldState("");
  const damage = {
    default: useFieldState(""),
    onFive: useFieldState(""),
    onTen: useFieldState(""),
    onSeventeen: useFieldState("") 
  };
  const savingThrowStat = useFieldState("STR");
  const result = useFieldState("");

  const requiresSavingThrow = useCheckboxState(false);

  const moveTypeOptions = useMemo(() => ([
    "Typeless",
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water"
  ]), []);

  const movePowerOptions = useMemo(() => ([
    "None",
    "STR",
    "DEX",
    "CON",
    "INT",
    "WIS",
    "CHA"
  ]), []);

  const disableEqualMovePowers = useCallback(
    comparationValue => option => option === comparationValue && comparationValue !== "None", 
  []);

  const reset = () => {
    if(window.confirm("Creating another macro will erase the current one, do you want to proceed?")) {
      const formatSet = value => ({ target: { value } });

      moveType.onChange(undefined, "Typeless");
      movePower[0].onChange(undefined, "None");
      movePower[1].onChange(undefined, "None");

      moveTime.onChange(formatSet(""));
      pp.onChange(formatSet(""));
      duration.onChange(formatSet(""));
      range.onChange(formatSet(""));
      description.onChange(formatSet(""));
      atHigherLevels.onChange(formatSet(""));
      damage.default.onChange(formatSet(""));
      damage.onFive.onChange(formatSet(""));
      damage.onTen.onChange(formatSet(""));
      damage.onSeventeen.onChange(formatSet(""));
      savingThrowStat.onChange(formatSet("STR"));
      result.onChange(formatSet(""));

      requiresSavingThrow.onChange({ target: { checked: false } });
      
      setCurrentStep(0);
    }
  }

  const renderResult = () => {
    let resultText = "";

    console.log(description)
    console.log(atHigherLevels)

    const formatDescription = description => 
      replace(/\r?\n|\r/g, " ", description)
      .split(" ")
      .map(value => test(/^\d+$/, trim(value)) ? `{${trim(value)}}` : trim(value))
      .join(" ");

    const modByStat = stat => ({
      None: "None",
      DEX: "DexMod",
      STR: "StrMod",
      CON: "ConMod",
      INT: "IntMod",
      WIS: "WisMod",
      CHA: "ChaMod",
    })[stat];

    const statChoice = 
    movePower[0].value === "None" ? 
    "0" : 
    movePower[1].value === "None" ? 
    modByStat(movePower[0].value) :
    `${modByStat(movePower[0].value)} > ${modByStat(movePower[1].value)} ? ${modByStat(movePower[0].value)} : ${modByStat(movePower[1].value)}`;

    resultText += `Type: ${moveType.value}\n`;
    resultText += `Move Power: ${movePower[0].value + (movePower[1].value === "None" ? "" : "/" + movePower[1].value)}\n`;
    resultText += trim(moveTime.value) === "" ? "" : `Move Time: ${moveTime.value}\n`;
    resultText += `PP: ${trim(pp.value) === "" ? "Unlimited" : pp.value}\n`;
    resultText += trim(moveTime.value) === "" ? "" : `Duration: ${duration.value}\n`;
    resultText += trim(moveTime.value) === "" ? "" : `Range: ${range.value}\n`;

    resultText += "\n";

    resultText += formatDescription(description.value);

    resultText += "\n\n";

    resultText += formatDescription(atHigherLevels.value);

    resultText += "\n\n";

    resultText += Object.values(damage).some(field => trim(field.value) === "" ) ? "" : `Attack Roll: {!(1d20) + (${statChoice}) + Prof}\n`;
    resultText += Object.values(damage).some(field => trim(field.value) === "" ) ? "" : `Adv./Dis. Attack Roll: !!(1d20 + {${statChoice}} + {Prof})\n`;

    resultText += "\n";

    resultText += trim(damage.default.value) === "" ? "" : `Damage Roll: !!(${trim(damage.default.value)} + {${statChoice}})\n`;
    resultText += trim(damage.default.value) === "" ? "" : `Critical Damage Roll: !!(${trim(damage.default.value)})\n`;

    resultText += "\n";

    resultText += trim(damage.onFive.value) === "" ? "" : `Damage Roll Lv.5: !!(${trim(damage.onFive.value)} + {${statChoice}})\n`;
    resultText += trim(damage.onFive.value) === "" ? "" : `Critical Damage Roll Lv.5: !!(${trim(damage.onFive.value)})\n`;

    resultText += "\n";

    resultText += trim(damage.onTen.value) === "" ? "" : `Damage Roll Lv.10: !!(${trim(damage.onTen.value)} + {${statChoice}})\n`;
    resultText += trim(damage.onTen.value) === "" ? "" : `Critical Damage Roll Lv.10: !!(${trim(damage.onTen.value)})\n`;

    resultText += "\n";

    resultText += trim(damage.onSeventeen.value) === "" ? "" : `Damage Roll Lv.17: !!(${trim(damage.onSeventeen.value)} + {${statChoice}})\n`;
    resultText += trim(damage.onSeventeen.value) === "" ? "" : `Critical Damage Roll Lv.17: !!(${trim(damage.onSeventeen.value)})\n`;

    resultText += "\n";

    resultText += requiresSavingThrow.checked ? `${savingThrowStat.value} Saving Throw DC: {8 + Prof + (${statChoice})}\n` : "";

    resultText += "\n";

    resultText += moveType.value === "Typeless" ? "" : `${moveType.value} type Pokémons can add their STAB to the damage: {Stab}`

    result.onChange({ target: { value: resultText } });
    next();
  }

  return (
    <div className="App" style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      margin: "0",
      padding: "0",
      border: "0",
    }}>
      <Paper elevation={3} style={{ width: "min(680px, 50vw)", padding: "15px 35px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stepper activeStep={currentStep} alternativeLabel>
              <Step>
                <StepLabel>Basic Info</StepLabel>
              </Step>

              <Step>
                <StepLabel>Description</StepLabel>
              </Step>

              <Step>
                <StepLabel>Damage and DC</StepLabel>
              </Step>

              <Step>
                <StepLabel>Result</StepLabel>
              </Step>
            </Stepper>
          </Grid>
          
          {currentStep === 0 &&
          (
            <>
              <Grid item xs={12}>
                <Autocomplete
                  {...moveType}
                  options={moveTypeOptions}
                  disableClearable
                  renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
                />
              </Grid>

              <Grid item xs={movePower[0].value === movePowerOptions[0] ? 12 : 6}>
                <Autocomplete
                  {...movePower[0]}
                  options={movePowerOptions}
                  disableClearable
                  getOptionDisabled={disableEqualMovePowers(movePower[1].value)}
                  renderInput={(params) => <TextField {...params} label="Move Power" variant="outlined" />}
                />
              </Grid>

              {movePower[0].value === movePowerOptions[0] ?
              movePower[1].value !== "None" && movePower[1].onChange(undefined, "None") :
              (<Grid item xs={6}>
                <Autocomplete
                  {...movePower[1]}
                  disabled={movePower[0].value === movePowerOptions[0]}
                  options={movePowerOptions}
                  disableClearable
                  getOptionDisabled={disableEqualMovePowers(movePower[0].value)}
                  renderInput={(params) => <TextField {...params} label="Move Power" variant="outlined" />}
                />
              </Grid>)}

              <Grid item xs={12}>
                <TextField label="Move Time" {...moveTime} />
              </Grid>

              <Grid item xs={12}>
                <TextField type="number" label="PP" {...pp} />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Duration" {...duration} />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Range" {...range} />
              </Grid>
            </>
          )}

          {currentStep === 1 &&
          (
            <>
              <Grid item xs={12}>
                <TextField 
                  label="Description"
                  multiline
                  rows={8}
                  {...description} 
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  label="At higher levels"
                  multiline
                  rows={3}
                  {...atHigherLevels} 
                />
              </Grid>
            </>
          )}

          {currentStep === 2 &&
          (
            <>
              <Grid item xs={12}>
                <TextField label="Damage" {...damage.default} />
              </Grid>

              <Grid item xs={4}>
                <TextField label="Damage (Lv.5)" {...damage.onFive} />
              </Grid>

              <Grid item xs={4}>
                <TextField label="Damage (Lv.10)" {...damage.onTen} />
              </Grid>

              <Grid item xs={4}>
                <TextField label="Damage (Lv.17)" {...damage.onSeventeen} />
              </Grid>

              <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...requiresSavingThrow}
                      color="primary"
                    />
                  }
                  label="Requires Saving Throw?"
                />
              </Grid>

              {requiresSavingThrow.checked && (
                <Grid item xs={12}>
                  <RadioGroup {...savingThrowStat} row style={{ display: "flex", justifyContent: "center" }}>
                    <FormControlLabel labelPlacement="bottom" value="STR" control={<Radio color="primary"/>} label="STR" />
                    <FormControlLabel labelPlacement="bottom" value="CON" control={<Radio color="primary"/>} label="CON" />
                    <FormControlLabel labelPlacement="bottom" value="DEX" control={<Radio color="primary"/>} label="DEX" />
                    <FormControlLabel labelPlacement="bottom" value="INT" control={<Radio color="primary"/>} label="INT" />
                    <FormControlLabel labelPlacement="bottom" value="WIS" control={<Radio color="primary"/>} label="WIS" />
                    <FormControlLabel labelPlacement="bottom" value="CHA" control={<Radio color="primary"/>} label="CHA" />
                  </RadioGroup>
                </Grid>
              )}
            </>
          )}

          {currentStep === 3 &&
          (
            <>
              <Grid item xs={12}>
                <TextField 
                  label="Result"
                  multiline
                  rows={12}
                  {...result} 
                />
              </Grid>
            </>
          )}

          <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between" }}>
            {currentStep > 0 && currentStep < 3 && (<Button onClick={prev}>Back</Button>)}
            {currentStep < 2 && (<Button onClick={next}>Next</Button>)}
            {currentStep === 2 && (<Button onClick={renderResult}>Finish</Button>)}
            {currentStep === 3 && (<Button onClick={reset}>Create Another</Button>)}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;