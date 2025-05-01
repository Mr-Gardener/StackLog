import mongoose, {Document} from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    coverimage?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema = new mongoose.Schema<IPost>(
    {
        title: {type: String, required: true},
        content: {type: String, required: true },
        coverimage: String,
        tags: [String],
    }, {timestamps: true}
);

export default mongoose.model<IPost>("Post", PostSchema);