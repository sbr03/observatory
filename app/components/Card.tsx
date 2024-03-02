import Link from 'next/link';

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <div>
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Other Upcoming Event</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
          <h1>Public JWST Lecture</h1>
          <h1>Thurs, March 7th, 1-2:30pm</h1>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="https://drexel.edu/coas/academics/departments-centers/physics/events/kaczmarczik-lectures/">Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardDemo;
