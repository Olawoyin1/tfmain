import re
import json

def generate_questions():
    with open(r'c:\Users\HP\OneDrive\Desktop\Gbolahan\TalentFactory\sample\assessment.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    sections = {'A': [], 'B': [], 'C': []}
    
    current_section = None
    questions = re.split(r'\nQ(\d+)\.\s+', text)
    
    for i in range(1, len(questions), 2):
        q_num = int(questions[i])
        q_body = questions[i+1].strip()
        
        if 1 <= q_num <= 10:
            current_section = 'A'
            is_essay = False
        elif 11 <= q_num <= 20:
            current_section = 'B'
            is_essay = False
        else:
            current_section = 'C'
            is_essay = True
            
        lines = q_body.split('\n')
        question_text = lines[0].strip()
        
        if is_essay:
            sections[current_section].append({
                'id': q_num,
                'question': question_text.replace(' (Max 3 sentences)', '').replace(' (Max 2 sentences)','').replace(' (Max 3 sentences — be specific)',''),
                'type': 'essay'
            })
        else:
            options = []
            for line in lines[1:]:
                line = line.strip()
                match = re.match(r'^[A-D]\)\s+(.*)', line)
                if match:
                    options.append(match.group(1).strip())
            sections[current_section].append({
                'id': q_num,
                'question': question_text,
                'options': options
            })
            
    out = "const QUESTIONS: Record<'A' | 'B' | 'C', Question[]> = {\n"
    for sec in ['A', 'B', 'C']:
        out += f"  {sec}: [\n"
        for q in sections[sec]:
            if 'options' in q:
                opt_str = json.dumps(q['options'])
                out += f"    {{ id: {q['id']}, question: {json.dumps(q['question'])}, options: {opt_str} }},\n"
            else:
                out += f"    {{ id: {q['id']}, question: {json.dumps(q['question'])}, type: 'essay' }},\n"
        out += "  ],\n"
    out += "};"
    
    with open(r'c:\Users\HP\OneDrive\Desktop\Gbolahan\TalentFactory\src\pages\AdmissionTestPage.tsx', 'r', encoding='utf-8') as f:
        page_code = f.read()
        
    start_idx = page_code.find("const QUESTIONS: Record<'A' | 'B' | 'C', Question[]> = {")
    end_idx = page_code.find("};", start_idx) + 2
    
    if start_idx != -1 and end_idx != -1:
        new_page_code = page_code[:start_idx] + out + page_code[end_idx:]
        with open(r'c:\Users\HP\OneDrive\Desktop\Gbolahan\TalentFactory\src\pages\AdmissionTestPage.tsx', 'w', encoding='utf-8') as f:
            f.write(new_page_code)
        print("Questions successfully injected!")
    else:
        print("Error: Could not find QUESTIONS object in TSX")
        
if __name__ == '__main__':
    generate_questions()
