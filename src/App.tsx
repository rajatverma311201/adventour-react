import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
    return (
        <>
            <div className="flex items-center justify-center text-center ">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Mode Toggle
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <ModeToggle />
                        <Button>Hello</Button>
                        <Input />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default App;
