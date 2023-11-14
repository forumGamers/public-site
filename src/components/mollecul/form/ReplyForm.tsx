"use client";

import Collapse from "@/components/atom/collapse/material-tailwind";
import { Card, CardBody } from "@/components/atom/card/material-tailwind";
import { Button } from "@/components/atom/button/material-tailwind";
import { Textarea } from "@/components/atom/form/material-tailwind";
import { useState } from "react";

export interface ReplyCollapseProps {
  open: boolean;
}

export default function ReplyCollapse({ open }: ReplyCollapseProps) {
  const [text, setText] = useState<string>("");
  return (
    <Collapse open={open}>
      <Card className="my-4 mx-auto w-8/12">
        <CardBody>
          <form>
            <Textarea
              placeholder="Your Comment"
              variant="outlined"
              rows={8}
              value={text}
              name="text"
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="text" className="rounded-full" type="submit">
              send
            </Button>
          </form>
        </CardBody>
      </Card>
    </Collapse>
  );
}
