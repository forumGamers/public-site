"use client";

import type { Comment } from "@/interfaces/post";
import { experimental_useOptimistic as useOptimistic } from "react";

export interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
    
}
