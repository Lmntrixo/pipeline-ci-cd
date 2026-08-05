CI/CD without kubernetes - pipeline CI/CD from scratch
A learning project demonstrating a complete continous integration and deployment pipeline,with no ORCHESTRATOR - Just github Actions,
Docker, and a self-hosted runner.

## Stack
- Node.js ( minimal HTTP server app)
- Docker
- github Actions ( self-hosted runner)

## Pipeline architecture
1. ** test Job ** (Github-hodted runner): syntax validation of code
2. ** deploy Job ** (self-hosted runner): builds the \docker image + automatically deploys it to the target server(my vm on local)

The "deploy job" only runs if ""test job"" SUCCEEDS ( "needs: test "), ensuring no unvalidated code gets deployed.

## Why a self-hosted runner?
Unlike a github-hosted runner ( an ephemeral machine destroyed after the job), a self-hosted runner allows the application
 container to **persist** after the pipeline finiches - a necessary condition for the app to remain accessible.

## Running the project locally

docker build -t my-app .
docker run -d -p 3000:3000 my-app
curl http://localhost:3000

#### What this project demonstrates
- understanding of CI/CD lifecycle ( continous integration + continous deployment)
- Setting up and managing a self-hosted runner
- Git best practices ('.gitignore, authentication token, clean commit structure)
- networking troubleshooting in constrained environmets( MTU,virtualization) 
