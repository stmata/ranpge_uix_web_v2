import React, { useEffect } from 'react';
import CustomizedSwitches from './switch';
import Header from '../../components/header/privateHeader'
import { useStateGlobal } from '../../context/contextStateGlobale';
import { useNavigate } from 'react-router-dom';

/**
 * Component representing the introduction page of the course for the L3 level.
 * @returns {JSX.Element} The rendered introduction page for the L3 level.
 */
export default function Introduction() {
    /**
   * Global state object containing level, evaluationInitial, and coursSelected.
   * @type {Object}
   */
  const { level, evaluationInitial, coursSelected } = useStateGlobal();

    /**
   * Title of the introduction page, dynamically generated based on the selected course.
   * @type {String}
   */
    const title = `Durant ce cours de remise à niveau, vous commencerez par une évaluation initiale pour évaluer votre compréhension générale des principaux concepts en ${coursSelected}. Il s'agira d'un quiz de 24 questions couvrant l'ensemble du contenu du cours.`

  /**
   * Hook for navigating to different pages in the application.
   * @type {Function}
   */
  const navigate = useNavigate()


  /**
   * UseEffect hook to set the document title and redirect to the cours page if necessary.
   */
  useEffect(() => {
    document.title = `RAN PGE - Introduction`;
    if (level === "L3" && (!evaluationInitial || !level)) {
        navigate("/cours");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='sk-body-private'>
        <Header title={title}/>
        <section className="section" style={{marginTop:'2px'}}>
            <div className="container text-theme">
                <div className='row' style={{textAlign: "justify", marginTop: "30px", marginBottom: "30px"}}>
                    <h5>Dans ce cours de mise à jour, vous débuterez par une évaluation initiale pour évaluer votre compréhension générale des concepts principaux en marketing. Cette évaluation comprendra deux parties :</h5>
                    <ul>
                        <li><h5>Un quiz de 24 questions à choix multiples couvrant l'ensemble du contenu du cours.</h5></li>
                        <li><h5>Un deuxième quiz de 24 questions avec des questions ouvertes pour approfondir votre compréhension.</h5></li>
                    </ul>

                    <h5>Veuillez noter que vous devrez choisir entre les deux types d'évaluations. Vous pouvez soit opter pour le quiz à choix multiples, soit pour le quiz avec des questions ouvertes. Votre choix déterminera le format de l'évaluation initiale que vous passerez.</h5>

                    <h5>En fonction de votre note globale à ces deux évaluations, vous aurez la possibilité de choisir des évaluations par module pour approfondir vos connaissances dans des domaines spécifiques du marketing. De plus, nous vous fournirons des suggestions de plan personnalisées pour vous aider dans votre apprentissage.</h5>

                </div>
                <div className='row'>
                    <center>
                        <CustomizedSwitches/>
                    </center>
                </div>
            </div>
        </section>
    </div>
  );
}
