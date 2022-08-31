import { useState, useEffect } from "react"
import { fetchMedicalHistory, putOption } from "../ApiManager"


//function for checkboxes on medical history
export const MedCheckBoxes = () => {
   const [medHistory, setMedHistory] = useState({
    userId: 0,
    abnormalEKG: false,
    anemia: false,
    anginaPectoris: false,
    asthma: false,
    boneDisease: false,
    breastLump: false,
    cancer: false,
    coronaryArteryDisease: false,
    depression: false,
    diabetesTypeI: false,
    diabetesTypeII: false,
    emphysema: false,
    gallBladderDisease: false,
    heartAttack: false,
    hepatitis: false,
    hypertension: false,
    hyperthyroidism: false,
    hypothyroidism: false,
    infertility: false,
    kidneyDisease: false,
    meningitis: false,
    osteoporosis: false,
    seizures: false,
    stroke: false
   }) 
   
   const localMedicalUser = localStorage.getItem("myMedical_user")
   const medicalUserObject = JSON.parse(localMedicalUser)

   useEffect(
    ()=>{
        fetchMedicalHistory()
        .then((historyFromAPI)=>{
            const historyForUser = historyFromAPI.filter((history)=> medicalUserObject.id === history.userId )
           
            setMedHistory(historyForUser[0])
        })
    },
    []
   )
   const handleSaveClick = (event) => { //function to save the updated Medical History
    event.preventDefault()
    fetchMedicalHistory(`/${medicalUserObject.id}`, putOption(medHistory))  //fetch call with PUT option
    .then((historyUpdate)=> {
        setMedHistory(historyUpdate)
    })
    
}
 
    
    const updateMedHistory = (evt) => {
        const copy = {...medHistory}
        copy[evt.target.value] = evt.target.checked
        setMedHistory(copy)
    }
    return (
    <form onSubmit={handleSaveClick}>
        <section className="historyForm1">
                <div className="historyList">
                    <p><input type="checkbox" value="abnormalEKG" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.abnormalEKG} /> 
                    <label htmlFor="flexCheckDefault">Abnormal EKG</label></p>
                    <p><input checked  type="checkbox" value="anemia" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.anemia}/>
                    <label htmlFor="flexCheckDefault">Anemia</label></p>
                    <p><input  type="checkbox" value="anginaPectoris" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.anginaPectoris}/>
                    <label htmlFor="flexCheckDefault">Angina Pectoris</label></p>
                    <p><input  type="checkbox" value="asthma" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.asthma}/>
                    <label htmlFor="flexCheckDefault">Asthma</label></p>
                </div>
                <div className="historyList">
                   
                    <p><input  type="checkbox" value="boneDisease" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.boneDisease}/>
                    <label htmlFor="flexCheckDefault">Bone Disease</label></p>
                    <p><input  type="checkbox" value="breastLump" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.breastLump}/>
                    <label htmlFor="flexCheckDefault">Breast Lump</label></p>
                    <p><input  type="checkbox" value="cancer" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.cancer}/>
                    <label htmlFor="flexCheckDefault">Cancer</label></p>
                    <p><input  type="checkbox" value="coronaryArteryDisease" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.coronaryArteryDisease}/>
                    <label htmlFor="flexCheckDefault">Coronary Artery Disease</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="depression" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.depression}/>
                    <label htmlFor="flexCheckDefault">Depression</label></p>
                    <p><input  type="checkbox" value="diabetesTypeI" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.diabetesTypeI}/>
                    <label htmlFor="flexCheckDefault">Diabetes Type I</label></p>
                    <p><input  type="checkbox" value="diabetesTypeII" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.diabetesTypeII}/>
                    <label htmlFor="flexCheckDefault">Diabetes Type II</label></p>
                    <p><input  type="checkbox" value="emphysema" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.emphysema}/>
                    <label htmlFor="flexCheckDefault">Emphysema</label></p>
                </div>
            </section>
            <hr style={{background:'black', height:'5px'}}/>
            <section className="historyForm1">
                <div className="historyList">
                    <p><input  type="checkbox" value="gallBladderDisease" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.gallBladderDisease}/>
                    <label htmlFor="flexCheckDefault">Gall Bladder Disease</label></p>
                    <p><input  type="checkbox" value="heartAttack" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.heartAttack}/>
                    <label htmlFor="flexCheckDefault">Heart Attack</label></p>
                    <p><input  type="checkbox" value="hepatitis" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.hepatitis}/>
                    <label htmlFor="flexCheckDefault">Hepatitis</label></p>
                    <p><input  type="checkbox" value="hypertension" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.hypertension}/>
                    <label htmlFor="flexCheckDefault">Hypertension</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="hyperthyroidism" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.hyperthyroidism}/>
                    <label htmlFor="flexCheckDefault">Hyperthyroidism</label></p>
                    <p><input  type="checkbox" value="hypothyroidism" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.hypothyroidism}/>
                    <label htmlFor="flexCheckDefault">Hypothyroidism</label></p>
                    <p><input  type="checkbox" value="infertility" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.infertility}/>
                    <label htmlFor="flexCheckDefault">Infertility</label></p>
                    <p><input  type="checkbox" value="kidneyDisease" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.kidneyDisease}/>
                    <label htmlFor="flexCheckDefault">Kidney Disease</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="meningitis" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.meningitis}/>
                    <label htmlFor="flexCheckDefault">Meningitis</label></p>
                    <p><input  type="checkbox" value="osteoporosis" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.osteoporosis}/>
                    <label htmlFor="flexCheckDefault">Osteoporosis</label></p>
                    <p><input  type="checkbox" value="seizures" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.seizures}/>
                    <label htmlFor="flexCheckDefault">Seizures</label></p>
                    <p><input  type="checkbox" value="stroke" id="flexCheckDefault" onChange={updateMedHistory} checked={medHistory.stroke}/>
                    <label htmlFor="flexCheckDefault">Stroke</label></p>
                </div>
            </section>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Save</button>
            </div><br/>
    </form>
    )
}

      
      