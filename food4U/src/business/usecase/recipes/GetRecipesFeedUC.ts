import { RecipeDB } from "../../../data/RecipeDB";
import { FeedRecipe } from "../../entities/FeedRecipe";

export class GetRecipesFeedUC {
    constructor(private db: RecipeDB){}

    public async execute(input: GetRecipesFeedInput): Promise<GetRecipesFeedOutput> {

        return { recipes: await this.db.getRecipes(input.followerId) }

    }
}

export interface GetRecipesFeedInput {
    followerId: string
}

export interface GetRecipesFeedOutput {
    recipes: FeedRecipe[]
}