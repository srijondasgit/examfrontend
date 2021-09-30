import React, { useState } from "react";
import axios from "axios";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";
import "../addquestion.css";

function AddQuestion() {
  const [index, setIndex] = useState("");
  const [questionText, setQuestionText] = useState("");

  const [score, setScore] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      index: index,
      questionText: questionText,
      score: score,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const id = localStorage.getItem("id");


    axios
      .post(`/teacher/addQuestion/${id}`, data, config)
      .then((res) => {
        setData(res.data);
        setQuestionText("");
        setIndex("");

        setScore("");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

    const DescriptionRenderer = ({ field }) => <textarea {...field} />;

  let questions = [
    {
      index: 1,
      questionText: "who am i?",
      score: 3
    },
    {
      index: 2,
      questionText: "questionText?",
      score: 6
    }
  ];

      const SORTERS = {
      NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
      NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
      STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
      STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
    };

    const getSorter = data => {
      const mapper = x => x[data.field];
      let sorter = SORTERS.STRING_ASCENDING(mapper);

      if (data.field === "id") {
        sorter =
          data.direction === "ascending"
            ? SORTERS.NUMBER_ASCENDING(mapper)
            : SORTERS.NUMBER_DESCENDING(mapper);
      } else {
        sorter =
          data.direction === "ascending"
            ? SORTERS.STRING_ASCENDING(mapper)
            : SORTERS.STRING_DESCENDING(mapper);
      }

      return sorter;
    };

      let count = questions.length;
    const service = {
      fetchItems: payload => {
        let result = Array.from(questions);
        result = result.sort(getSorter(payload.sort));  // getSorter(payload.sort)
        return Promise.resolve(result);
        
      },
      create: question => {
        count += 1;
        questions.push({
          ...question,
          index: count
        });
        return Promise.resolve(question);
      },
      update: data => {
        const question = questions.find(t => t.index === data.index);
        question.questionText = data.questionText;
        question.score = data.score;
        return Promise.resolve(question);
      },
      delete: data => {
        const question = questions.find(t => t.index === data.index);
        questions = questions.filter(t => t.index !== question.index);
        return Promise.resolve(question);
      }
    };

        const styles = {
      container: { margin: "auto", width: "fit-content" }
    };

  

  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3"> </h5>
      <div style={{ maxWidth: 350 }}>
        <div className="form-group">
          <label htmlFor="index">Index of Question</label>
          <input
            type="text"
            className="form-control"
            id="index"
            placeholder="Enter Index of Question"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="questionText" className="mt-2">
            Question
          </label>
          <input
            type="text"
            className="form-control"
            id="questionText"
            placeholder="Question"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="score" className="mt-2">
            Score
          </label>
          <input
            type="text"
            className="form-control"
            id="score"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-info mt-3 d-grid gap-2 col-12 mx-auto"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Add Question"}
        </button>
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />

            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>
        <ul>
          <li>{index}</li>
          <li>{questionText}</li>
          <li>{score}</li>
        </ul>
      </div>



      <div style={styles.container}>
        <CRUDTable
          caption="Questions"
          fetchItems={(payload) => service.fetchItems(payload)}
        >
          <Fields>
            <Field name="index" label="Index" />
            <Field name="questionText" label="Question" placeholder="Question" />
            <Field
              name="score"
              label="Score"
              // render={DescriptionRenderer}
              placeholder="Score"
            />
          </Fields>
          <CreateForm
            title="Question Creation"
            message="Create a new question!"
            trigger="Create Question"
            onSubmit={(question) => service.create(question)}
            submitText="Create"
            
            validate={(values) => {
              const errors = {};
              if (!values.questionText) {
                errors.questionText = "Please, provide question's text";
              }


              if (!values.score) {
                errors.score = "Please, provide question's score";
              }

              return errors;
            }}
          />
              
         
          <UpdateForm
            title="Question Update Process"
            message="Update Question"
            trigger="Update"
            onSubmit={(question) => service.update(question)}
            submitText="Update"
            validate={(values) => {
              const errors = {};

              if (!values.index) {
                errors.index = "Please, provide index";
              }

              if (!values.questionText) {
                errors.questionText = "Please, provide task's questionText";
              }

              if (!values.score) {
                errors.score = "Please, provide task's score";
              }

              return errors;
            }}
          />

          <DeleteForm
            title="Question Delete Process"
            message="Are you sure you want to delete the question?"
            trigger="Delete"
            onSubmit={(question) => service.delete(question)}
            submitText="Delete"
            validate={(values) => {
              const errors = {};
              if (!values.index) {
                errors.index = "Please, provide index";
              }
              return errors;
            }}
          />
        </CRUDTable>
      </div>
    </div>
  );
}

AddQuestion.propTypes = {};
export default AddQuestion;


