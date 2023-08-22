import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import upvote from '../../../assets/sort-up.svg'
import downvote from '../../../assets/sort-down.svg'
import './Question.css'
import Avatar from '../../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { deleteQuestion, postAnswer ,voteQuestion} from '../../../actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import swal from 'sweetalert'



const QuestionsDetails = () => {
    const { id } = useParams()
    const questionsList = useSelector(state => state.questionsReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    // console.log(location);
    const url = 'http://localhost:3000'



    const [Answer, setAnswer] = useState('')
    const User = useSelector((state) => state.currentUserReducer)

    const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            swal("Login or Signup to answer a question");
            navigate("/Auth");
        } else {
            if (Answer === "") {
                swal("Enter an answer before submitting");
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name,userId: User.result._id }));
                setAnswer("");
            }
        }
    };
    const handleShare = () => {
        copy(url + location.pathname);

        swal("Copied url : " + url + location.pathname);
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate));
    };

    const handleUpVote = () => {
        if (User === null) {
          alert("Login or Signup to up vote a question");
          navigate("/Auth");
        } else {
          dispatch(voteQuestion(id, "upVote"));
        }
      };
    
      const handleDownVote = () => {
        if (User === null) {
          alert("Login or Signup to down vote a question");
          navigate("/Auth");
        } else {
          dispatch(voteQuestion(id, "downVote"));
        }
      };
    


    return (
        
        <div className="question-datails-page">
            {
                questionsList.data === null ?
                    <h1>loading....</h1> :
                    <>
                        {
                            questionsList.data.filter(question => question._id === id).map(question => (
                                <div key={question._id}>
                                    {/* {console.log(question)} */}
                                    <section className='question-details-container'>
                                        <h1> {question.questionTitle} </h1>
                                        <div className='question-details-container-2' >
                                            <div className="question-vote">
                                                <img src={upvote} alt="   " width='18' className='vote-icon' onClick={handleUpVote} />
                                                <p>{question.upVote.length - question.downVote.length}</p>
                                                <img src={downvote} alt="" width='18' className='vote-icon' onClick={handleDownVote}  />
                                            </div>
                                            <div style={{ width: '100%' }} className="">
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-action-user">
                                                    <div>
                                                        <button type='button' onClick={handleShare}>Share</button>
                                                        {User?.result?._id === question?.userId && (
                                                            <button type="button" onClick={handleDelete}>
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p>Asked {moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/Users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}  >
                                                            <Avatar backgroundColor='green' px='8px' py='5px'   >{question.userPosted.charAt(0).toUpperCase()} </Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3> {question.noOfAnswers} Answers </h3>
                                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                            </section>
                                        )
                                    }

                                    <section className='post-ans-container'>
                                        <h3> Your Answer</h3>
                                        <form onSubmit={(e) => { handlePostAns(e, question.answer.length); }}>
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                                value={Answer}
                                                onChange={(e) => setAnswer(e.target.value)}
                                            ></textarea>
                                            <br />
                                            <input
                                                type="submit"
                                                className="post-ans-btn"
                                                value="Post Your Answer"
                                            />
                                        </form>
                                        <p>
                                            Browser other question taged

                                            {

                                                question.questionTags.map((tag) => (
                                                    <Link to={'/Tags'} key={tag} className='ans-tags' >{tag}</Link>
                                                ))
                                            } or <br />
                                            <Link to='/AskQuestion' style={{ textDecoration: "none", color: '#009dff' }} > Ask your own question</Link>
                                        </p>
                                    </section>
                                    
                                </div>
                                
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionsDetails