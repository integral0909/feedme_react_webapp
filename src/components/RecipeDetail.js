import React, { Component } from 'react';
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import '../css/Cards.css';
import {extractHostname} from "../utils";
import {ShareGroup} from "./ShareGroup";
import {AspectConstrainedImage} from "./AspectConstrainedImage";
import {SaveButton} from "./SaveButton";
import {RecipePropertyRow} from "./RecipePropertyRow";
import {Reviewer} from "./Reviewer";
import {get} from '../services/ApiService';
import {RatingsSummary} from "./RatingsSummary";
import {IngredientList} from "./IngredientList";
import {DownloadCard} from "./DownloadCard";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {rating: 0, userRating: 0, ratingsLoading: true}
  }
  componentDidMount = () => {
    get(`recipes/${this.props.pg_id}/ratings`, null,
        this.props.auth.token).then((data) => {
      this.setState({
        userRating: data.user_rating, rating: data.rating,
        ratingsLoading: false, ratingsCount: data.ratings_count
      })
    }).catch((ex) => {console.error(ex)});
  };
  handleRating = (newRating) => {
    this.setState({userRating: newRating, ratingsLoading: false})
  };
  render() {
    let hostName = extractHostname(this.props.source_url);
    let pageUrl = `https://www.feedmeeapp.com/recipe/${this.props.pg_id}`;
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="card bordered padded margin-top-lg">
                <div className="row">
                  <AspectConstrainedImage
                      imageUrl={this.props.image_url}
                      className="margin-bottom ratings-summary-parent"
                      alt={this.props.name} ratio="16:9">
                    <RatingsSummary rating={this.state.rating}
                                    ratingsCount={this.state.ratingsCount}/>
                  </AspectConstrainedImage>
                </div>
                <div className="row">
                  <div className="col-sm-6 bordered-right">
                    <h2 className="pink">{this.props.name}</h2>
                    <p className="text-muted">{this.props.description}</p>
                    <p>Recipe from <a href={this.props.source_url} target="_blank">{hostName}</a></p>
                    <p>
                      <ul className="list-inline text-muted">
                        {this.props.keywords.map((item, idx) => {
                          return (<li key={idx}>{item}</li>)
                        })}
                      </ul>
                    </p>
                  </div>
                  <div className="col-sm-6 margin-top" style={{  }}>
                    <strong>Share recipe</strong>
                    <ButtonToolbar>
                      <ShareGroup url={pageUrl} title={this.props.name} />
                      <ButtonGroup>
                        <SaveButton saved={this.props.saved} type="recipe"
                                    pg_id={this.props.pg_id} auth={this.props.auth} />
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
              <div className="card bordered padded">
                <div className="row">
                  <div className="col-sm-7 bordered-right">
                    <RecipePropertyRow
                        prepTimeSeconds={this.props.prep_time_seconds}
                        cookTimeSeconds={this.props.cook_time_seconds}
                        servings={this.props.servings}
                        difficulty={this.props.difficulty}
                    />
                  </div>
                  <div className="col-sm-5">
                    <Reviewer subject="recipe" rating={this.state.userRating}
                              auth={this.props.auth} pg_id={this.props.pg_id}
                              handleUpdate={this.handleRating}
                              loading={this.state.ratingsLoading}
                    />
                  </div>
                </div>
              </div>
              <div className="card bordered padded">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>Ingredients</h3>
                    <IngredientList ingredients={this.props.ingredients} />
                  </div>
                  <div className="col-sm-6">
                    <h3>Instructions</h3>
                    <p>Recipe instructions from <a href={this.props.source_url} target="_blank">{hostName}</a></p>
                    <Button href={this.props.source_url} target="_blank" block
                            bsStyle="danger" bsSize="large" className="btn-red">View Instructions</Button>
                    <div className="card bordered border-dashed padded margin-top">
                      <p>This recipe was originally from <a href={this.props.source_url} target="_blank">{hostName}</a>.</p>
                      <p>You can’t view the recipe on Feedmee because we respect the original author and prefer to refer you to their sites. Read more.</p>
                      <p>If you are the original author, you can claim your profile now & contribute.</p>
                    </div>
                  </div>
                </div>
              </div>
              <DownloadCard />
            </div>
          </div>
        </div>
    )
  }
}

export {RecipeDetail};
