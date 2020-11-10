import * as React from 'react'
import { Form, Button, Grid, Icon, Dropdown } from 'semantic-ui-react'
import Auth from '../auth/Auth'
import { getProject } from '../api/todos-api';
import { Project } from '../types/Project';

const issueTypeOptions = [
  {
    key: "Feature"
  },
  {
    key: "Defect"
  },
  {
    key: "Task"
  }
];

interface EditProjectProps {
  match: {
    params: {
      projectId: string
    }
  }
  auth: Auth
}

interface EditProjectState {
  project: Project
  newIssueDescription: string,
  newIssueType: string,
  loadingProjects: boolean
}

export class EditProject extends React.PureComponent<
EditProjectProps,
EditProjectState
> {
  state: EditProjectState = {
    project: {id: "", name: "", issues: []},
    newIssueDescription: "",
    newIssueType: issueTypeOptions[0].key,
    loadingProjects: true
  }

  async componentDidMount() {
    try {
      const project = await getProject(this.props.auth.getIdToken(), this.props.match.params.projectId)
      console.log(project);
      this.setState({
        project,
        loadingProjects: false
      })
    } catch (e) {
      alert(`Failed to fetch todos: ${e.message}`)
    }
  }

 

  render() {
    return (
      <Grid padded>
        <Grid.Row >
          <Grid.Column>Issue Number</Grid.Column>
          <Grid.Column>Description</Grid.Column>
          <Grid.Column>Type</Grid.Column>
          <Grid.Column>Status</Grid.Column>
        </Grid.Row>

        {this.state.project.issues.map((issue) => {
          return (
            <Grid.Row key={issue.id}>
              <Grid.Column >
                {issue.issueNumber}
              </Grid.Column>
              <Grid.Column width={8}>
                {issue.description}
              </Grid.Column>
              <Grid.Column>
                <Dropdown selection />
              </Grid.Column>
              <Grid.Column>
                {issue.status}
              </Grid.Column>
              {/* <Grid.Column width={1} floated="right">
                { <Button
                  icon
                  color="blue"
                  onClick={() => this.onEditButtonClick(project.id)}
                >
                  <Icon name="pencil" />
                </Button> }
              </Grid.Column> */}
            </Grid.Row>
          )
        })}
      </Grid>
    )
  }

  renderButton() {

    return (
      <div>
        
        
      </div>
    )
  }
}
