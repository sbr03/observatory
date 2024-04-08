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
      <Card className={cn("w-[380px] mx-auto", className)} {...props}>
        <CardHeader>
          <CardTitle>Other Upcoming Event</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
          <h1>Solar Eclipse (but not an observatory event)</h1>
          <h1>Monday, April 8th, 2-4:30pm</h1>
          <br />
          <p>Nothing is planned at the observatory (since you can see the eclipse equally well from anywhere in the city, but likely places on campus where people will be gathering include Korman Quad and Perelman Plaza).  Please do not look directly at the Sun without approved eclipse glasses!  Maximum eclipse is at 3:23pm.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Link href="https://www.timeanddate.com/eclipse/in/@4560347?iso=20240408">Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardDemo;
