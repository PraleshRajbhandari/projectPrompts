import mongoose, {Schema, model, models, mongo} from "mongoose";

const PromptSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    prompt:{
        type: String,
        required: [true, 'Prompt is Required']
    },
    tag:{
        type: String,
        required: [true, 'Tag is Required']
    }
});

const Prompt = models.Prompt || model('Prompt',PromptSchema);

export default Prompt;