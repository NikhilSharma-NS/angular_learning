#### Services and Dependecy Injection

###### What are services

```
Application

                         AppComponent                                 <- Log Service
AboutComponent                            UserComponent               <- User Service 
(log data to console)                     (Store user data)   
                                                |
                                          UserDetailComponent                              
                                          (log data to console)   

```

###### Why would we need Services

