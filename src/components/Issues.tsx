import * as React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Auth from '../auth/Auth'

import { Issue } from '../types/Issue';

const issueTypeOptions = [
  {
    key: 1,
    value: "feature",
    name: "Feature"
  }

];

interface IssuesProps {
  match: {
    params: {
      projectId: string
    }
  }
  auth: Auth
}

interface IssuesState {
  issues: Issue[]
  newIssueDescription: string,
  newIssueType: string,
  loadingProjects: boolean
}

export class EditTodo extends React.PureComponent<
IssuesProps,
IssuesState
> {
  state: IssuesState = {
    issues: [],
    newIssueDescription: "",
    newIssueType: issueTypeOptions[0].value,
    loadingProjects: true
  }

  async componentDidMount() {
    try {
      // const projects = await getProjects(this.props.auth.getIdToken())
      // console.log(projects);
      // this.setState({
      //   projects,
      //   loadingProjects: false
      // })
    } catch (e) {
      alert(`Failed to fetch todos: ${e.message}`)
    }
  }

 

  render() {
    return (
      <div>
        <h1>Upload new image</h1>

       
      </div>
    )
  }

  renderButton() {

    return (
      <div>
        
        
      </div>
    )
  }
}
