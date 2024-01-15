import { FaCaretUp } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa'

const FrequenltyAskedQuestion = () => {
  // const questions = [
  //   {
  //     id: 1,
  //     question: 'question1',
  //     answer: 'response1',
  //   },
  //   {
  //     id: 2,
  //     question: 'date2',
  //     answer: 'response2',
  //   },
  //   {
  //     id: 3,
  //     question: 'date3',
  //     answer: 'response4',
  //   },
  //   {
  //     id: 4,
  //     question: 'date4',
  //     answer: 'response4',
  //   },
  // ]

  return (
    <section className="">
      <h2>Preguntas Frecuentes</h2>
      <section>
        <div>
          <article>
            <h3>Question</h3>
            <button>
              <FaCaretDown />
            </button>
            <button>
              <FaCaretUp />
            </button>
          </article>
          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias hic mollitia libero optio vel eum praesentium ducimus
              ipsam assumenda, deleniti similique amet neque maiores iste culpa
              exercitationem est quod eveniet. At dolorum nam accusamus
              laboriosam harum repudiandae excepturi nemo rem.
            </p>
          </article>
        </div>
      </section>
    </section>
  )
}
export default FrequenltyAskedQuestion
