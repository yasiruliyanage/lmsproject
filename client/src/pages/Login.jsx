import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormMessage } from "@/components/ui/form"

const Login = () => {
    const loginFormikform = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string().required('Required'),
        }),
        onSubmit:(values) => {
            console.log('login form values',values)
        }
    });

    const signupFormikForm = useFormik({
        initialValues: {
            name: '',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string().required('Required'),
        }),
        onSubmit:(values) => {
            console.log('Signup form values',values)
        }
    })

  return (
    <div className="flex items-center w-full justify-center">
    <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              Create a new account and Click signup when you're done.
            </CardDescription>
          </CardHeader>
          <form onSubmit={signupFormikForm.handleSubmit} >
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="">Name</Label>
              <Input id="name"placeholder="Eg. John Doe" {...signupFormikForm.getFieldProps('name')} />
              {signupFormikForm.touched.name && signupFormikForm.errors.name ? ( <p
                    data-slot="form-message"
                    className={"text-destructive text-sm"}
                  >
                    {signupFormikForm.errors.name}
                  </p>) : null}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email"> Email </Label>
              <Input id="email"placeholder="example@example.com" type="email" {...signupFormikForm.getFieldProps('email')} />
              {signupFormikForm.touched.email && signupFormikForm.errors.email ? ( <p
                    data-slot="form-message"
                    className={"text-destructive text-sm"}
                  >
                    {signupFormikForm.errors.email}
                  </p>) : null}
            </div>
            <div className="space-y-1">
              <Label htmlFor="password"> Password </Label>
              <Input id="password" type="password" placeholder="User@123" {...signupFormikForm.getFieldProps('password')} />
              {signupFormikForm.touched.password && signupFormikForm.errors.password ? ( <p
                    data-slot="form-message"
                    className={"text-destructive text-sm"}
                  >
                    {signupFormikForm.errors.password}
                  </p>) : null}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign up</Button>
          </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <form onSubmit={loginFormikform.handleSubmit}>
          <CardContent className="space-y-2">
         
            <div className="space-y-1">
              <Label htmlFor="email"> Email </Label>
              <Input id="email" type="email" placeholder="example@example.com" {...loginFormikform.getFieldProps('email')} />
              {loginFormikform.touched.email && loginFormikform.errors.email ? ( <p
                    data-slot="form-message"
                    className={"text-destructive text-sm"}
                  >
                    {loginFormikform.errors.email}
                  </p>) : null}

            </div>
            <div className="space-y-1">
              <Label htmlFor="password"> Password </Label>
              <Input id="password" type="password" placeholder="User@123" {...loginFormikform.getFieldProps('password')} />
              {loginFormikform.touched.password && loginFormikform.errors.password ? ( <p
                    data-slot="form-message"
                    className={"text-destructive text-sm"}
                  >
                    {loginFormikform.errors.password}
                  </p>) : null}

            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" >Login</Button>
          </CardFooter>
        </form>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Login;
