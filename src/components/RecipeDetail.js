import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../css/Cards.css';
import {extractHostname} from "../utils";
import {AspectConstrainedImage} from "./AspectConstrainedImage";
import {RecipePropertyRow} from "./RecipePropertyRow";
import {Reviewer} from "./Reviewer";
import {RatingsSummary} from "./RatingsSummary";
import {IngredientList} from "./IngredientList";
import {DownloadCard} from "./DownloadCard";
import {RecipeToolbar} from "./RecipeToolbar";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {rating: 0, userRating: 0, ratingsLoading: true}
  }
  handleRatingsUpdate = (data) => {
    this.setState({
      userRating: data.user_rating, rating: data.rating,
      ratingsLoading: false, ratingsCount: data.ratings_count
    })
  };
  handleRating = (newRating) => {
    this.refs.ratingsSummary.updateData()
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
                                    ratingsCount={this.state.ratingsCount}
                                    onUpdate={this.handleRatingsUpdate}
                                    subject="recipes"
                                    pg_id={this.props.pg_id}
                                    ref="ratingsSummary"
                                    auth={this.props.auth}
                    />
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
                    <RecipeToolbar url={pageUrl} pg_id={this.props.pg_id}
                                   auth={this.props.auth} saved={this.props.saved}
                                   title={this.props.name}
                    />
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
