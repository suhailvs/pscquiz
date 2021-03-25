## Running the Project Locally

First, clone the repository to your local machine:

```bash
git clone https://github.com/suhailvs/pscquiz
```

Create Virtual Env and Install the requirements and runserver:

```bash
cd pscquiz
python3 -m venv env
source ./env/bin/activate
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```