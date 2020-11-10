import * as React from 'react'
import { Card, Grid, StrictPaginationItemProps } from 'semantic-ui-react'
import { Issue } from '../types/Issue';
import { Link } from 'react-router-dom'

interface IssueComponentProps {
  issue: Issue
}

interface IssueComponentState {
  description: string,
  selectedType: string,
  selectedStatus: string,
  typeOptions: Array<string>
}



export class IssueComponent extends React.PureComponent<IssueComponentProps, IssueComponentState> {
  state: IssueComponentState ={
    description: "",
    selectedType: "",
    selectedStatus: "",
    typeOptions: ["Feature","Defect","Research"]
  };

  

  async componentDidMount() {
    const state: any = {
      description: this.props.issue.description,
      selectedType: this.props.issue.type,
      selectedStatus: this.props.issue.status
    };

    this.setState(state);
  }

  handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedType: event.target.value,
    });
    this.props.issue.type = event.target.value;
  };

  render() {
    return (
      <Grid.Row>
        <Grid.Column>{this.props.issue.issueNumber}</Grid.Column>
        <Grid.Column>{this.props.issue.description}</Grid.Column>
        <Grid.Column>
          <select name='selectedType' onChange={this.handleChangeType}>
            {this.state.typeOptions.map(option => option === this.state.selectedType ? 
            (<option value={option} selected >{option}</option>) :
            (<option value={option}>{option}</option>))};            
          </select>
        </Grid.Column>
        <Grid.Column>{this.props.issue.status}</Grid.Column>
      </Grid.Row>

    )
  }
}