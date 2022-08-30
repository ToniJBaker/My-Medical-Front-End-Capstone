import { useState, useEffect } from "react"
import { fetchMedicalHistory } from "../ApiManager"


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
    
    return (
    <form>
        <section className="historyForm1">
                <div className="historyList">
                    <p><input type="checkbox" value="abnormalEKG" id="flexCheckDefault" /> 
                    <label htmlFor="flexCheckDefault">Abnormal EKG</label></p>
                    <p><input checked  type="checkbox" value="anemia" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Anemia</label></p>
                    <p><input  type="checkbox" value="anginaPectoris" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Angina Pectoris</label></p>
                    <p><input  type="checkbox" value="asthma" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Asthma</label></p>
                </div>
                <div className="historyList">
                   
                    <p><input  type="checkbox" value="boneDisease" id="flexCheckDefault" checked={medHistory.boneDisease}/>
                    <label htmlFor="flexCheckDefault">Bone Disease</label></p>
                    <p><input  type="checkbox" value="breastLump" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Breast Lump</label></p>
                    <p><input  type="checkbox" value="cancer" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Cancer</label></p>
                    <p><input  type="checkbox" value="coronaryArteryDisease" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Coronary Artery Disease</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="depression" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Depression</label></p>
                    <p><input  type="checkbox" value="diabetesTypeI" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Diabetes Type I</label></p>
                    <p><input  type="checkbox" value="diabetesTypeII" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Diabetes Type II</label></p>
                    <p><input  type="checkbox" value="emphysema" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Emphysema</label></p>
                </div>
            </section>
            <hr style={{background:'black', height:'5px'}}/>
            <section className="historyForm1">
                <div className="historyList">
                    <p><input  type="checkbox" value="gallBladderDisease" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Gall Bladder Disease</label></p>
                    <p><input  type="checkbox" value="heartAttack" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Heart Attack</label></p>
                    <p><input  type="checkbox" value="hepatitis" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Hepatitis</label></p>
                    <p><input  type="checkbox" value="hypertension" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Hypertension</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="hyperthyroidism" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Hyperthyroidism</label></p>
                    <p><input  type="checkbox" value="hypothyroidism" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Hypothyroidism</label></p>
                    <p><input  type="checkbox" value="infertility" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Infertility</label></p>
                    <p><input  type="checkbox" value="kidneyDisease" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Kidney Disease</label></p>
                </div>
                <div className="historyList">
                    <p><input  type="checkbox" value="meningitis" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Meningitis</label></p>
                    <p><input  type="checkbox" value="osteoporosis" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Osteoporosis</label></p>
                    <p><input  type="checkbox" value="seizures" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Seizures</label></p>
                    <p><input  type="checkbox" value="stroke" id="flexCheckDefault"/>
                    <label htmlFor="flexCheckDefault">Stroke</label></p>
                </div>
            </section>
    </form>
    )
}

      
      